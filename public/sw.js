const CACHE_NAME = "sama-taxi-v1.0.0";
const STATIC_CACHE = "sama-taxi-static-v1.0.0";
const DYNAMIC_CACHE = "sama-taxi-dynamic-v1.0.0";

// Resources to cache immediately
const STATIC_ASSETS = [
  "/",
  "/driver-conditions",
  "/manifest.json",
  "/images~/Sama Taxi-04.svg",
  "/images~/Sama Taxi-05.svg",
  "/images~/IPhone16.png",
  "/images~/get_on_app_store.svg",
  "/images~/get_on_google_play.svg",
  "/images~/Sama App Download.png",
  "/images~/Sama Captains.png",
  "/images~/female_driver2.png",
];

// Network-first resources (always try network first)
const NETWORK_FIRST_PATTERNS = [/\/api\//, /\.json$/];

// Cache-first resources (try cache first)
const CACHE_FIRST_PATTERNS = [
  /\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico)$/,
  /\.(?:css|js)$/,
  /\/images~/,
  /\/_next\/static\//,
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");

  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log("Service Worker: Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting(),
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");

  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== CACHE_NAME
            ) {
              console.log("Service Worker: Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients
      self.clients.claim(),
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip chrome-extension and other protocols
  if (!url.protocol.startsWith("http")) {
    return;
  }

  // Handle different types of requests
  if (NETWORK_FIRST_PATTERNS.some((pattern) => pattern.test(request.url))) {
    // Network-first strategy for API calls and JSON
    event.respondWith(networkFirst(request));
  } else if (
    CACHE_FIRST_PATTERNS.some((pattern) => pattern.test(request.url))
  ) {
    // Cache-first strategy for static assets
    event.respondWith(cacheFirst(request));
  } else if (request.mode === "navigate") {
    // Stale-while-revalidate for navigation requests
    event.respondWith(staleWhileRevalidate(request));
  } else {
    // Default to network-first
    event.respondWith(networkFirst(request));
  }
});

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("Network failed, trying cache:", error);
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page for navigation requests
    if (request.mode === "navigate") {
      return caches.match("/");
    }

    throw error;
  }
}

// Cache-first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("Cache-first failed:", error);

    // Return a fallback if available
    if (request.destination === "image") {
      return new Response("", { status: 200, statusText: "OK" });
    }

    throw error;
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  // Fetch from network in background
  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, but we might have cached version
      return null;
    });

  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }

  // Otherwise wait for network response
  const networkResponse = await networkPromise;
  if (networkResponse) {
    return networkResponse;
  }

  // Fallback to main page for navigation
  return caches.match("/");
}

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  console.log("Background sync:", event.tag);

  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued offline actions
  console.log("Performing background sync...");
}

// Push notifications (if needed in future)
self.addEventListener("push", (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body,
    icon: "/images~/Sama Taxi-05.svg",
    badge: "/images~/Sama Taxi-05.svg",
    vibrate: [200, 100, 200],
    data: data.data || {},
    actions: data.actions || [],
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data.url || "/"));
});

// Handle messages from main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Periodic background sync (if supported)
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "content-sync") {
    event.waitUntil(syncContent());
  }
});

async function syncContent() {
  console.log("Syncing content in background...");
  // Sync any updated content
}

// Error handling
self.addEventListener("error", (event) => {
  console.error("Service Worker error:", event.error);
});

self.addEventListener("unhandledrejection", (event) => {
  console.error("Service Worker unhandled rejection:", event.reason);
});

console.log("Service Worker: Loaded");
