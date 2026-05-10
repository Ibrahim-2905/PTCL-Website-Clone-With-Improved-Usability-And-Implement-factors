"use client";
import { useRef, useEffect, useState } from "react";
import { gradient, greenDark } from "../utils/colors";

const links = [
  { label: "Bill Payment Options", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Mobile App", href: "#" },
];

const Chevron = ({ dir }) => (
  <div
    className={`absolute top-0 bottom-0 w-10 z-10 pointer-events-none flex items-center
      ${dir === "left" ? "left-0 justify-start pl-1.5" : "right-0 justify-end pr-1.5"}`}
    style={{
      background: `linear-gradient(to ${dir === "left" ? "right" : "left"}, ${greenDark}80, transparent)`,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d={dir === "left" ? "M9 2L4 7l5 5" : "M5 2l5 5-5 5"}
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function TopBar() {
  const ref = useRef(null);
  const [fade, setFade] = useState({ left: false, right: false });

  const checkFade = () => {
    const el = ref.current;
    if (!el) return;
    setFade({
      left: el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    checkFade();
    window.addEventListener("resize", checkFade);
    return () => window.removeEventListener("resize", checkFade);
  }, []);

  return (
    <div className="relative w-full" style={{ background: gradient }}>
      {fade.left  && <Chevron dir="left"  />}
      {fade.right && <Chevron dir="right" />}

      <div
        ref={ref}
        onScroll={checkFade}
        className="flex items-center overflow-x-auto py-[7px] px-[clamp(12px,4vw,80px)]"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <span className="text-white text-[11px] font-bold uppercase tracking-widest mr-3 whitespace-nowrap shrink-0">
          Quick Links :
        </span>

        <ul className="flex items-center flex-nowrap list-none m-0 p-0">
          {links.map((link, i) => (
            <li key={link.label} className="flex items-center shrink-0">
              {i > 0 && <span className="text-white/50 text-[11px] mx-2.5 select-none">|</span>}
              <a
                href={link.href}
                className="text-white text-[11.5px] tracking-wide whitespace-nowrap no-underline hover:opacity-70 hover:underline transition-opacity duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}