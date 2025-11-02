"use client";

import Link from "next/link";
import Logo from "./logo";

type Props = {
  activePage?: "home" | "pricing";
};

export default function Header({ activePage = "home" }: Props) {
  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <header className="fixed top-0 z-30 w-full h-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-full">
        <div className="relative flex h-full items-center justify-between gap-3 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li>
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  activePage === "home"
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`text-sm font-medium transition-colors ${
                  activePage === "pricing"
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <button
                className="btn-sm bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors rounded-full"
                onClick={() => {
                  // Go directly to consultation form without email validation
                  if (typeof window !== 'undefined' && (window as any).openConsultation) {
                    (window as any).openConsultation();
                  }
                }}
              >
                Get Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
