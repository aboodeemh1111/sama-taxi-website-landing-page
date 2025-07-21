import Image from "next/image";
import { useState } from "react";
import get_on_app_store from "@/public/images/download/get-on-app-store.png";
import get_on_google_play from "@/public/images/download/get-on-google-play.png";

const Download = () => {
  return (
    //background declration
    <section className="bg-off-white-100 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left side */}
          <div className=" text-white space-y-6">
            <h2 className="text-4xl lg-text-5xl font-bold leading-tight">
              Get Sama Taxi
              <span className="block text-yellow-200 ">Mobile App</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Book rides instantly, track your ride, and pay securely with Sama
            </p>
          </div>
          {/*Features List*/}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h8-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/download/icon1.png"
                  alt="icon1"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-white/90">Real-time Tracking</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/download/icon2.png"
                  alt="icon2"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-white/90">Instant Booking</span>
            </div>

            <div className="flex items-center space-3-x ">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/download/icon3.png"
                  alt="icon3"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-white/90">Multiple Payment Options</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/download/icon4.png"
                  alt="icon4"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-white/90">24/7 Customer Support</span>
              {/*download buttons*/}
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="bg-yellow-200 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-300 transition-all"
                >
                  <Image
                    src="/images/download/google-play.png"
                    alt="google-play"
                    width={24}
                    height={24}
                  />
                  <span>Google Play</span>
                </a>

                <a
                  href="#"
                  className="bg-yellow-200 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-300 transition-all"
                >
                  <Image src="" alt="app-store" width={24} height={24} />
                  <span>App Store</span>
                </a>
              </div>
              {/*QR code section*/}
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/80 mb-4 text-center">
                  Or scan the QR code
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/download/qr-code.png"
                    alt="qr-code"
                    width={150}
                    height={150}
                  />
                </div>
                <p className="text-white/80 mt-4 text-center">
                  Download the app from the store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
