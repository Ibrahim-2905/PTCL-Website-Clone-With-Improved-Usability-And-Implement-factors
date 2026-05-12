"use client";
import Image from "next/image";
import SearchBar from "./ui/searchBar";
import { lightGreen, white, gradient, darkGray } from "../utils/colors";
import { FiChevronRight } from "react-icons/fi";

const pressReleases = [
  {
    id: 1,
    image: "/images/card1.jpg",
    title: "When a Network Goes Beyond the Signal: PTCL & Ufone Partner with Oladoc to Bring Free Mental Health Support to Pakistan's New Mothers",
    category: "Press Releases",
    date: "10-05-2026",
  },
  {
    id: 2,
    image: "/images/card2.jpg",
    title: "PTCL Group back into profits with Rs. 3.1 billion bottom-line in Q1 2026",
    category: "Press Releases",
    date: "21-04-2026",
  },
  {
    id: 3,
    image: "/images/card3.jpeg",
    title: "PTCL & Ufone Applaud Pakistan Hockey Team's Historic World Cup Qualification",
    category: "Press Releases",
    date: "06-03-2026",
  },
];

export default function PressReleases() {
  return (
    <section
      className="w-full py-10 md:py-14 px-4 md:px-10"
      style={{ backgroundImage: gradient }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        <SearchBar />

        <div>
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-bold font-swiss mb-6"
            style={{ color: white }}
          >
            Latest Press Releases
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((item) => (
              <div
                key={item.id}
                className="flex flex-col  overflow-hidden"
              >
                <div className="relative w-full aspect-video shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-1 pt-4 gap-3">
                  <h3
                    className="font-swiss font-semibold text-sm md:text-base leading-snug line-clamp-4"
                    style={{ color: white }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-swiss text-xs md:text-sm mt-auto"
                    style={{ color: white }}
                  >
                    {item.category} | {item.date}
                  </p>

                  <button
                    className="flex items-center  cursor-pointer gap-2 font-swiss text-sm font-semibold w-fit transition-opacity hover:opacity-70"
                    style={{ color: white }}
                  >
                    <span>Read More</span>
                    <FiChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}