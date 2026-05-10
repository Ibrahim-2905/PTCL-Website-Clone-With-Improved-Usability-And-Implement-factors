"use client";
import { FiSearch } from "react-icons/fi";

export default function SearchInput({ className = "" }) {
  return (
    <div className={`flex items-center border border-gray-300 rounded-[3px] overflow-hidden h-8 ${className}`}>
      <input
        type="text"
        placeholder="Search"
        className="outline-none px-3 text-[12.5px] text-gray-700 w-[145px] bg-transparent placeholder-gray-400"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      />
      <button className="w-[30px] h-8 bg-gray-100 border-l border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
        <FiSearch className="w-[14px] h-[14px] text-gray-500" strokeWidth={2} />
      </button>
    </div>
  );
}