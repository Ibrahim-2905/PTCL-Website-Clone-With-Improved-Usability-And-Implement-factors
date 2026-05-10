"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import SearchInput from "../components/ui/searchInput";
import { lightGreen, greenDark, gradient } from "../utils/colors";

const navMenus = [
  {
    label: "Telephone",
    type: "plain",
    columns: [
      ["Add-ons", "Telephone Sets", "Internet Packages for Voice Users"],
      ["Packages", "Call Tariff"],
      ["Value Added Services", "Dialing Codes"],
    ],
  },
  {
    label: "Internet",
    type: "headed",
    wide: true,
    columns: [
      {
        heading: "Wired Internet",
        links: [
          "Products & Packages",
          "'Fast Path' for Online Gamers",
          "Internet Static IP",
          "Fair Usage Policy & Acceptable Use Policy",
          "Extend your Wifi Reach",
          "Unlimited Internet Packages",
          "Guidelines for High Rise Buildings",
          "PTCL MyRewards App",
        ],
      },
      {
        heading: "Wireless Internet",
        links: [
          "PTCL Flash-Fi – Mirpur, AJK",
          "Charji Closure",
          "CharJi Coverage",
          "CharJi Tariffs for AJK",
          "Ufone 4G Blaze – PTCL Offer",
          "PTCL AJK Home-Fi",
          "EVO 3G Closure",
          "What is CharJi EVO?",
          "CharJi/EVO Usage Details",
          "CharJi Landline Offer",
          "PTCL 'UPTCL' App",
          "Data volume finished? No Problem",
        ],
      },
    ],
  },
  {
    label: "TV",
    type: "plain",
    wide: true,
    columns: [
      ["Products & Packages", "Shoq App"],
      ["Shoq Cast"],
      ["Shoq TV"],
    ],
  },
  {
    label: "Devices",
    type: "plain",
    wide: true,
    columns: [
      ["Smart Home IoT Devices"],
      ["Telephone Sets"],
      ["Wi-Fi Extenders"],
    ],
  },
  {
    label: "VAS",
    type: "simple",
    links: ["Value Added Services", "Packages", "Promotions"],
  },
  {
    label: "Others",
    type: "simple",
    links: ["Business Solutions", "Shop", "Support", "Coverage Areas", "Work at PTCL"],
  },
];

function DropdownContent({ menu }) {
  if (menu.type === "simple") {
    return (
      <div className="py-3 px-5 flex flex-col gap-0">
        {menu.links.map((link) => (
          <Link
            key={link}
            href="#"
            className="block text-[12.5px] text-gray-600 py-[5px] hover:text-[#A5CC4D] transition-colors duration-150"
          >
            {link}
          </Link>
        ))}
      </div>
    );
  }

  if (menu.type === "headed") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-6 py-4 sm:py-5 overflow-x-auto">
        {menu.columns.map((col) => (
          <div key={col.heading} className="min-w-0 sm:min-w-[200px] flex-shrink-0">
            <p
              className="text-[11px] font-bold uppercase tracking-wider mb-3 pb-2 border-b border-gray-200"
              style={{ color: greenDark }}
            >
              {col.heading}
            </p>
            {col.links.map((link) => (
              <Link
                key={link}
                href="#"
                className="block text-[12.5px] text-gray-600 py-[4px] hover:text-[#A5CC4D] transition-colors duration-150 break-words"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // plain — columns without headings
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 px-4 sm:px-6 py-4 sm:py-5">
      {menu.columns.map((col, i) => (
        <div key={i} className="min-w-0 sm:min-w-[160px]">
          {col.map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-[12.5px] text-gray-600 py-[4px] hover:text-[#A5CC4D] transition-colors duration-150 break-words"
            >
              {link}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const toggleMobileMenu = (label) =>
    setOpenMobileMenu((prev) => (prev === label ? null : label));

  return (
    <nav
      className="w-full bg-white shadow-sm relative z-50"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ── Desktop header ── */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 hidden lg:flex items-center justify-between h-[58px]">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://ptcl.com.pk/images/ptcl-logo-plain.svg"
            alt="PTCL Logo"
            width={90}
            height={36}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menus */}
        <div className="flex items-center">
          {navMenus.map((menu) => (
            <div key={menu.label} className="relative group">

              {/* ── FIX 1: removed after: pseudo-element classes that caused
                   the thin green line spanning the full navbar on hover ── */}
              <button
                className={[
                  "relative flex items-center gap-1 px-[14px] h-[58px]",
                  "text-[13px] font-medium text-gray-700 bg-transparent border-none cursor-pointer",
                  "transition-colors duration-150 group-hover:text-[#A5CC4D]",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px]",
                  "after:bg-[#A5CC4D] after:scale-x-0 group-hover:after:scale-x-100",
                  "after:transition-transform after:duration-200 after:origin-left",
                ].join(" ")}
              >
                {menu.label}
                <FiChevronDown
                  className="w-[11px] h-[11px] text-gray-500 group-hover:text-[#A5CC4D] group-hover:rotate-180 transition-transform duration-200"
                  strokeWidth={2.5}
                />
              </button>

              {/* Dropdown */}
              <div
                className="absolute top-[58px] hidden group-hover:block bg-white shadow-lg z-50"
                style={{
                  minWidth:
                    menu.type === "headed"
                      ? "560px"
                      : menu.wide
                      ? "420px"
                      : "175px",
                  left: menu.label === "Others" ? "auto" : "0",
                  right: menu.label === "Others" ? "0" : "auto",
                }}
              >
                <DropdownContent menu={menu} />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Cart + Search + Sign In */}
        <div className="flex items-center gap-3">
          <button className="relative p-1 cursor-pointer bg-transparent border-none">
            <FiShoppingCart className="w-[22px] h-[22px] text-gray-600" strokeWidth={1.5} />
            <span
              className="absolute -top-[3px] -right-[3px] w-[15px] h-[15px] rounded-full flex items-center justify-center text-white text-[9px] font-bold"
              style={{ background: gradient }}
            >
              0
            </span>
          </button>
          <SearchInput />
          <button
            className="px-4 py-[6px] text-[12.5px] font-semibold text-white rounded-[3px] cursor-pointer border-none transition-opacity hover:opacity-90"
            style={{ background: gradient, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile header — hamburger left, logo center, cart right */}
      <div className="lg:hidden relative flex items-center justify-center h-[58px] px-4 border-b border-gray-100">

        {/* Hamburger — absolute left */}
        <button
          className="absolute left-4 p-2 bg-transparent border-none cursor-pointer text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <FiX className="w-6 h-6" strokeWidth={2} />
            : <FiMenu className="w-6 h-6" strokeWidth={2} />}
        </button>

        {/* Logo — centered */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://ptcl.com.pk/images/ptcl-logo-plain.svg"
            alt="PTCL Logo"
            width={80}
            height={32}
            priority
            className="object-contain"
          />
        </Link>

        {/* Cart — absolute right */}
        <div className="absolute right-4">
          <button className="relative p-1 cursor-pointer bg-transparent border-none">
            <FiShoppingCart className="w-[20px] h-[20px] text-gray-600" strokeWidth={1.5} />
            <span
              className="absolute -top-[3px] -right-[3px] w-[14px] h-[14px] rounded-full flex items-center justify-center text-white text-[9px] font-bold"
              style={{ background: gradient }}
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md max-h-[80vh] overflow-y-auto">
          {navMenus.map((menu) => (
            <div key={menu.label} className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-medium text-gray-700 bg-transparent border-none cursor-pointer hover:text-[#A5CC4D] transition-colors"
                onClick={() => toggleMobileMenu(menu.label)}
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {menu.label}
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openMobileMenu === menu.label ? "rotate-180" : ""}`}
                  strokeWidth={2}
                />
              </button>

              {openMobileMenu === menu.label && (
                <div className="bg-gray-50 px-2 pb-3 pt-1">
                  <DropdownContent menu={menu} />
                </div>
              )}
            </div>
          ))}

          {/* Mobile bottom bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100">
            <SearchInput className="flex-1 [&_input]:w-full" />
            <button
              className="px-4 py-[7px] text-[12.5px] font-semibold text-white rounded-[3px] border-none cursor-pointer whitespace-nowrap"
              style={{ background: gradient }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}