// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Reliable Taxi Rides in{" "}
            <span className="text-yellow-500">Jeddah</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Book fast, affordable, and secure rides across Saudi Arabia with
            Sama Taxi — your go-to ride-hailing app.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#download"
              className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-600 transition"
            >
              Download the App
            </a>
            <a
              href="#how-it-works"
              className="text-yellow-500 font-medium underline hover:text-yellow-600"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Right: Image/Mockup */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="/images/phone-mockup.png"
            alt="Sama Taxi App Interface"
            className="w-[280px] md:w-[320px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
