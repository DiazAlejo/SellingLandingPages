"use client";

import { useState, useEffect } from "react";
import ConsultationModal from "@/components/ui/consultation-modal";

export default function ClientWrapper() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>(undefined);

  function openConsultation(email?: string) {
    if (email) {
      setPrefillEmail(email);
      setModalOpen(true);
    } else {
      // If no email provided, go directly to form (for header buttons)
      setPrefillEmail(undefined);
      setModalOpen(true);
    }
  }

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const handleOpenConsultation = () => {
      openConsultation();
    };

    window.addEventListener('openConsultation', handleOpenConsultation);
    return () => window.removeEventListener('openConsultation', handleOpenConsultation);
  }, []);

  // Expose the function globally for other components
  useEffect(() => {
    (window as any).openConsultation = openConsultation;
    return () => {
      delete (window as any).openConsultation;
    };
  }, []);

  return (
    <ConsultationModal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      prefillEmail={prefillEmail}
    />
  );
}
