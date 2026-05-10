"use client";
import Image from "next/image";
import { lightGreen, white, black, greenDark } from "../utils/colors";

const cards = [
  { id: 1, label: "Shoq TV",   image: "/icons/shoqtv.svg"   },
  { id: 2, label: "Internet",  image: "/icons/internet.svg"  },
  { id: 3, label: "Add-ons",   image: "/icons/addons.png"    },
  { id: 4, label: "Telephone", image: "/icons/telephone.svg" },
  { id: 5, label: "Devices",   image: "/icons/devices.png"   },
];

export default function LatestOffers() {
  return (
    <section
      className="w-full py-8 md:py-10 px-4 md:px-10"
      style={{ backgroundColor: greenDark }}
    >
      {/* Heading */}
      <div className="mb-6 md:mb-8 text-center md:text-left max-w-7xl mx-auto">
        <p
          className="text-xs md:text-sm font-semibold tracking-widest uppercase font-swiss"
          style={{ color: lightGreen }}
        >
          Checkout our
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1 font-swiss"
          style={{ color: white }}
        >
          Latest Offers
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            className="flex items-center justify-center gap-2 md:gap-2 rounded-xl
              px-4 py-4
              w-[calc(50%-6px)]
              sm:w-[calc(33.333%-10px)]
              md:w-[calc(20%-13px)]
              cursor-pointer transition-all duration-300
              hover:scale-105 hover:brightness-110
              font-swiss font-semibold
              text-sm sm:text-base md:text-lg "
            style={{
              backgroundColor: black,
              color: white,
              
            }}
          >
            <Image
              src={card.image}
              alt={card.label}
              width={28}
              height={28}
              className="object-contain shrink-0 w-6 h-6 md:w-6 md:h-6"
            />
            <span className="whitespace-nowrap md:text-sm lg:text-xl ">{card.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}