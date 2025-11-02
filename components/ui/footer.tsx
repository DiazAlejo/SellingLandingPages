"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PrivacyPolicyModal from "./privacy-policy-modal";
import TermsOfServiceModal from "./terms-of-service-modal";

export default function Footer({ border = false }: { border?: boolean }) {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          {/* Main footer content - Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Logo and Navigation */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/images/1.png"
                    alt="ClicksyDev Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <nav className="flex flex-col gap-2">
                  <Link
                    className="text-sm text-gray-600 transition hover:text-gray-900"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-sm text-gray-600 transition hover:text-gray-900"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </nav>
              </div>
            </div>

            {/* Middle Column - Legal */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-sm text-gray-600 transition hover:text-gray-900 text-left"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-sm text-gray-600 transition hover:text-gray-900 text-left"
                >
                  Terms of Service
                </button>
              </nav>
            </div>

          {/* Right Column - Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link
                className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Bottom section - Copyright and reCAPTCHA */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm text-gray-600">
            &copy; 2025 Devnitie. All rights reserved.
          </div>
          <div className="text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </div>
        </div>
      </div>
    </footer>
    <PrivacyPolicyModal
      open={isPrivacyModalOpen}
      onClose={() => setIsPrivacyModalOpen(false)}
    />
    <TermsOfServiceModal
      open={isTermsModalOpen}
      onClose={() => setIsTermsModalOpen(false)}
    />
    </>
  );
}
