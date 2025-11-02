"use client";
import { captureEmail, isValidEmail } from "@/lib/email-capture";

export default function Cta() {

  const handleClick = (email?: string) => {
    if (typeof window !== 'undefined' && (window as any).openConsultation) {
      (window as any).openConsultation(email);
    }
  };

  // Handle email form submission
  const handleEmailSubmit = async (email: string) => {
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Open modal immediately
    handleClick(email);
    // Fire-and-forget capture
    captureEmail(email, 'cta_section');
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300"
        >
          {/* Overlay - matching hero section */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          
          <div className="relative z-10 px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-white [border-image:linear-gradient(to_right,transparent,rgba(255,255,255,0.3),transparent)1] md:mb-12 md:text-4xl">
              Ready to see your custom demo?
            </h2>
            <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">
              Submit your email and we'll create a demo website tailored to your business — fast, professional, and completely free.
            </p>
            
            {/* Email form - copied from hero with inverted colors */}
            <div className="pb-8 text-center">
              <div className="mx-auto max-w-md flex justify-center">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget as HTMLFormElement);
                    const email = String(data.get("email") || "").trim();
                    
                    handleEmailSubmit(email);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    name="email"
                    aria-label="Email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-[28rem] rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-40 rounded-full bg-blue-600 px-3 py-2 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Started!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
