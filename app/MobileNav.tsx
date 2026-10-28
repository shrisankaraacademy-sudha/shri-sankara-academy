
"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Examinations", href: "#exams" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d9d2c4] text-2xl text-[#244b38]"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <nav className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-[#e8e1d3] bg-[#faf8f2] p-3 shadow-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-[#203d30] transition hover:bg-[#e9eee6]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
