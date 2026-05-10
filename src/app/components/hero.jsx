"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Breadcrumb from "./breadCrumb";

const slides = [
  // { id: 1, image: "/images/slide1.png", alt: "Slide 1" },
  { id: 5, image: "/images/slide5.jpg", alt: "Slide 5" },
  { id: 2, image: "/images/slide2.jpg", alt: "Slide 2" },
  { id: 3, image: "/images/slide3.jpg", alt: "Slide 3" },
  { id: 4, image: "/images/slide4.jpg", alt: "Slide 4" },
  { id: 6, image: "/images/slide6.png", alt: "Slide 6" },
  { id: 7, image: "/images/slide7.jpg", alt: "Slide 7" },
  { id: 8, image: "/images/slide8.jpg", alt: "Slide 8" },
  { id: 9, image: "/images/slide9.jpg", alt: "Slide 9" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full" style={{ aspectRatio: "1920/672" }}>

      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
        <Breadcrumb
          total={slides.length}
          current={current}
          onChange={setCurrent}
        />
      </div>
    </section>
  );
}