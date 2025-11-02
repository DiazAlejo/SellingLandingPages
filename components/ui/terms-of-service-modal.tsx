"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function TermsOfServiceModal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // click outside to close
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (!modalRef.current) return;
      if (!modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-label="Terms of Service"
    >
      <div className="fixed inset-0 bg-black/40" />
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white p-6 shadow-xl overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Terms of Service</h3>
            <p className="text-sm text-gray-600 mt-1">ClicksyDev</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <p className="text-base">
            By accessing or using any ClicksyDev service, you agree to these Terms of Service ("Terms"). Please read them carefully, as they outline your rights and responsibilities when working with us or using our website.
          </p>

          <p className="text-base">
            ClicksyDev provides web design, development, and digital services — including landing pages, small websites, hosting, and related solutions — designed to help businesses grow online.
          </p>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Permitted Use</h4>
            <p>
              You agree to use our services only for lawful business purposes and in accordance with these Terms. You may not use our website or services in any way that could harm ClicksyDev, other users, or interfere with normal system operations.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">2. User Responsibilities</h4>
            <p className="mb-3">By using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information during any consultation or project.</li>
              <li>Refrain from uploading, distributing, or transmitting malicious, harmful, or illegal content.</li>
              <li>Not attempt to access, modify, or interfere with ClicksyDev systems or data without authorization.</li>
              <li>Maintain the confidentiality of your account credentials and promptly notify us of any unauthorized access.</li>
            </ul>
            <p className="mt-3">
              You are solely responsible for the activity that occurs under your account.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Intellectual Property</h4>
            <p className="mb-3">
              All software, code, designs, text, images, and other creative assets developed or displayed by ClicksyDev remain the exclusive property of ClicksyDev unless otherwise agreed in writing.
            </p>
            <p className="mb-3">
              You may not reproduce, modify, distribute, or use any part of our platform, website, or materials without prior written consent.
            </p>
            <p>
              Client-owned materials (such as logos, brand assets, or content provided to ClicksyDev) remain the property of the client.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Suspension or Termination</h4>
            <p>
              ClicksyDev reserves the right to suspend or terminate access to services or accounts that violate these Terms, engage in abusive behavior, or act in ways that could compromise security, integrity, or performance.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Modifications to These Terms</h4>
            <p>
              We may update or revise these Terms periodically. Any significant changes will be communicated through our website or by email. Continued use of our services after such updates constitutes your acceptance of the new Terms.
            </p>
          </section>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="btn bg-blue-600 text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

