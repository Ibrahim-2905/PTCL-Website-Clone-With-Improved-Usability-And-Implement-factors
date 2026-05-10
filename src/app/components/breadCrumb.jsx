"use client";

export default function Breadcrumb({ total, current, onChange }) {
  return (
    <div className="flex items-center justify-center gap-[6px]">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Slide ${i + 1}`}
          className={`h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
            i === current ? "w-5 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );
}