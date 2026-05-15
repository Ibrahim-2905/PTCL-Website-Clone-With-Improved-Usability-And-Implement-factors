"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    heading: "About Us",
    links: ["About PTCL", "HSE & Sustainability", "Financials", "Corporate Information", "Business Code of Conduct"],
  },
  {
    heading: "Shop",
    links: ["Devices", "Telephone", "Internet", "TV"],
  },
  {
    heading: "Support",
    links: ["Contact Directory", "Smart Shop", "Sales Outlets", "Corporate Customer Centers"],
  },
  {
    heading: "Media",
    links: ["Press Releases", "TV Commercials", "Awards and Recognition", "Blogs", "Membership"],
  },
  {
    heading: "Governance",
    links: ["Company Profile", "Board of Directors", "Election of Directors", "Dividend Payment Status", "Investor Relations", "Investor Information", "Compliance", "Gender Pay Gap Data", "CyberSecurity Guidelines"],
  },
  {
    heading: "Explore",
    links: ["Tenders & Vendors"],
  },
  {
    heading: "Careers",
    links: ["Careers"],
  },
];

const socialIcons = [
  { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook"  },
  { icon: <FaTwitter size={16} />,   href: "#", label: "Twitter"   },
  { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
  { icon: <FaYoutube size={16} />,   href: "#", label: "YouTube"   },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }}>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2">
              <h3 className="font-swiss font-bold text-sm md:text-base mb-1 text-white">
                {col.heading}
              </h3>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-swiss text-xs md:text-sm leading-snug text-[#aaaaaa] hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

          <div className="flex items-center gap-4">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white hover:text-[#aaaaaa] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1">
            <p className="font-swiss text-xs text-[#aaaaaa]">
              Copyright © 2026 PTCL. All Rights Reserved.
            </p>
            <span className="text-[#aaaaaa] text-xs hidden sm:inline">|</span>
            <a href="#" className="font-swiss text-xs text-[#aaaaaa] hover:text-white transition-colors">
              Terms and Conditions
            </a>
            <span className="text-[#aaaaaa] text-xs">|</span>
            <a href="#" className="font-swiss text-xs text-[#aaaaaa] hover:text-white transition-colors">
              General Privacy Notice
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}