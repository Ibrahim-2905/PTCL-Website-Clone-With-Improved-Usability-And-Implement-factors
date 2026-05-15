"use client";
import Image from "next/image";
import { white } from "../utils/colors";

export default function PlayStoreSection() {
  return (
    <section
      className="relative w-full min-h-[180px]"
      style={{ aspectRatio: "1920/480" }}
    >
      <Image
        src="/images/play-store-section.jpg"
        alt="UPTCL App Background"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center text-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">

          <h2
            className="font-swiss font-bold text-sm sm:text-base md:text-2xl lg:text-3xl"
            style={{ color: white }}
          >
            UPTCL App
          </h2>

          <p
            className="font-swiss text-[10px] sm:text-xs md:text-sm lg:text-base"
            style={{ color: white }}
          >
            One stop solution to serve you better!
          </p>

          <p
            className="font-swiss text-[10px] sm:text-xs md:text-sm lg:text-base"
            style={{ color: white }}
          >
            Download the App for easy access.
          </p>

          <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2">
            <a href="#" className="transition-opacity hover:opacity-80">
              <Image
                src="/images/playstore-logo.png"
                alt="Available on the App Store"
                width={140}
                height={44}
                className="object-contain w-16 sm:w-24 md:w-32 lg:w-40 h-auto"
              />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <Image
                src="/images/playstore-logo2.png"
                alt="Android App on Google Play"
                width={140}
                height={44}
                className="object-contain w-16 sm:w-24 md:w-32 lg:w-40 h-auto"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}