import NextImage from "next/image";
import { useState, useEffect } from "react";

const Download = () => {
  const google_play = "/images~/get_on_google_play.svg";
  const app_store = "/images~/get_on_app_store.svg";
  return (
    <section className="py-20">
      {/*Download section*/}

      <div className="container mx-auto">
        {/*Top section*/}

        <div className=" flex flex-col items-center justify-center gap-y-8">
          {/*Title*/}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-yellow-300">
              Download the App
            </h2>
            <p className="text-gray-500">
              Download to start your trip with us today
            </p>
          </div>
        </div>

        {/*Bottom section*/}
        <div className="flex flex-row">
          <div className="basis-1/3">
            <div className="flex flex-col items-center justify-center gap-y-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-yellow-300">
                Start your trip with us today
              </h2>
            </div>
            <div className="basis-1/3">
              <div className="flex flex-col items-center justify-center gap-y-8 bg-gray-50">
                <h3 className="text-2xl font-bold text-yellow-300">
                  Download on the{" "}
                  <span className="text-gray-500">App Store</span>
                </h3>
              </div>
              <div className="basis-1/3">
                <div className="flex flex-col items-center justify-center gap-y-8 bg-gray-50">
                  <h3 className="text-2xl font-bold text-yellow-300">
                    Download on the{" "}
                    <span className="text-gray-500">Google Play</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
