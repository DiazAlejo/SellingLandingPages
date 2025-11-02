"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({ open, onClose }: Props) {
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
      aria-label="Privacy Policy"
    >
      <div className="fixed inset-0 bg-black/40" />
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white p-6 shadow-xl overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Privacy Policy</h3>
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
            At ClicksyDev, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services. By using our site, you agree to the terms described below.
          </p>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h4>
            <p className="mb-3">
              We may collect personal information that you voluntarily provide, such as your name, email address, company details, or any information submitted through our contact forms or project inquiries.
            </p>
            <p>
              We may also collect non-personal data automatically, such as browser type, device information, and general analytics for website performance and improvement.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h4>
            <p className="mb-3">Your information may be used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries and provide requested services or quotes.</li>
              <li>Communicate project updates or important notices.</li>
              <li>Improve our website, offerings, and customer experience.</li>
              <li>Maintain website security and comply with applicable laws.</li>
            </ul>
            <p className="mt-3">
              We will never sell your personal data or use it for purposes unrelated to your original intent.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Sharing of Information</h4>
            <p className="mb-3">
              We do not share your personal information with third parties, except in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>When required to provide a service you requested (e.g., hosting, email automation, or analytics tools under confidentiality agreements).</li>
              <li>When required by law, regulation, or legal process.</li>
            </ul>
            <p className="mt-3">
              All third-party partners are carefully selected and comply with standard data protection practices.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Data Protection & Security</h4>
            <p>
              We implement reasonable technical and organizational measures to safeguard your information against unauthorized access, loss, misuse, or alteration. This includes secure hosting, SSL encryption, and restricted internal access to client data.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5. Your Rights</h4>
            <p>
              You may request access, correction, or deletion of your personal information at any time by contacting us at <a href="mailto:contact@clicksydev.com" className="text-blue-600 hover:text-blue-800 underline">contact@clicksydev.com</a>. We will process your request in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6. Policy Updates</h4>
            <p>
              ClicksyDev reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after such updates constitutes your acknowledgment and acceptance of the revised terms.
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

