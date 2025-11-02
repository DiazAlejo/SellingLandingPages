"use client";

import { useEffect, useRef, useState } from "react";
import DetailedConsultationForm from "./detailed-consultation-form";

type Props = {
  open: boolean;
  onClose: () => void;
  prefillEmail?: string;
};

export default function ConsultationModal({ open, onClose, prefillEmail }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function handleFormSubmit(formData: any) {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "website-mvp", prefillEmail }),
      });
      if (!res.ok) throw new Error("Server error");
      setSuccess(true);
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-label="Consultation form"
    >
      <div className="fixed inset-0 bg-black/40" />
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white p-6 shadow-xl overflow-y-auto"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>
            <p className="text-sm text-gray-600 mt-1">Tell us about your project and we'll guide you to the right solution</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {success ? (
          <div className="mt-6 space-y-4">
            <p className="text-gray-700">Thanks — we received your request.</p>
            <p className="text-sm text-gray-500">
              Alejandro will review submissions and reach out to promising
              leads.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="btn bg-blue-600 text-white"
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <DetailedConsultationForm
              onSubmit={handleFormSubmit}
              loading={loading}
              error={error}
              prefillEmail={prefillEmail}
            />
          </div>
        )}
      </div>
    </div>
  );
}
