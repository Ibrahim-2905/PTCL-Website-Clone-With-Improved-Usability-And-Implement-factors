"use client";
import { useState } from "react";
import { greenDark, white } from "../../utils/colors";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <p className="font-swiss text-sm md:text-base font-semibold mb-2" style={{ color: white }}>
        Quick Search
      </p>
      <div
        className="flex items-center w-full border rounded-md overflow-hidden"
        style={{ borderColor: "#cccccc", backgroundColor: white }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here"
          className="flex-1 px-4 py-3 text-sm md:text-base font-swiss outline-none bg-transparent"
          style={{ color: "#333333" }}
        />
        <button
          className="px-4 py-3 flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ color: greenDark }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}