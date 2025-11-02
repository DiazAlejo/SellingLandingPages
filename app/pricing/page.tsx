"use client";

import { useState } from "react";
import { captureEmail, isValidEmail } from "@/lib/email-capture";
import FAQSection from "@/components/faq-section";
import Cta from "@/components/cta";

export default function PricingPage() {
  const [showEmailForm, setShowEmailForm] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  function openConsultation(email?: string, packageType?: string) {
    if (typeof window !== 'undefined' && (window as any).openConsultation) {
      (window as any).openConsultation(email);
    }
  }

  const handlePackageClick = (packageName: string) => {
    setShowEmailForm(packageName);
    setEmail("");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Open consultation immediately
    openConsultation(email, showEmailForm || undefined);
    // Fire-and-forget capture
    captureEmail(email, 'pricing_page', showEmailForm || undefined);

    // Reset local UI state right away
    setShowEmailForm(null);
    setEmail("");
  };

  const packages = [
    {
      name: "Standard",
      price: "$500",
      description: "Starting price for landing page (additional features available)",
      ideal: "Great for landing pages and service-based businesses",
      features: [
        "Hosting & maintenance: $15-30/month",
        "Custom landing page design",
        "Mobile responsive layout",
        "Some backend functionality",
        "Contact form integration",
        "Basic SEO optimization"
      ],
      cta: "Get Inquiry"
    },
    {
      name: "Advanced",
      price: "$800-$1500",
      description: "Web pages (2+ pages): $800 for 2 pages, up to $1500 for 5 pages",
      ideal: "For businesses ready to scale",
      features: [
        "Hosting & maintenance: $30-50/month",
        "Includes all features from Standard",
        "Advanced backend functionality (additional cost)",
        "AI chat widget (additional cost)",
        "Advanced analytics dashboard (additional cost)",
        "Custom integrations & API connections (additional cost)"
      ],
      cta: "Get Inquiry"
    }
  ];

  return (
    <>
      {/* Hero section with lead generation CTA */}
      <section className="min-h-screen flex flex-col items-start justify-start pt-32 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center flex-1">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Not sure what you need? Just tell us your idea.
          </h1>
          <p 
            className="text-xl text-gray-600 mb-8"
          >
            You don't need to pick a plan — share your thoughts, and we'll guide you.
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).openConsultation) {
                (window as any).openConsultation();
              }
            }}
            className="bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors rounded-full text-3xl px-24 py-8 font-bold mb-16"
          >
            Give Your Idea
          </button>
          
          {/* Scroll indicator arrow */}
          <div className="animate-bounce mt-4">
            <a 
              href="#packages" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('packages');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Scroll to packages"
            >
              <span className="text-sm mb-2">View Packages</span>
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Package cards */}
      <section id="packages" className="relative pt-8 pb-20 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 scroll-mt-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold text-white mb-4"
            >
              Choose your package
            </h2>
            <p 
              className="text-lg text-white/90"
            >
              All packages include a free consultation to discuss your specific needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`px-8 py-6 rounded-2xl border-2 border-black transition-all duration-200 hover:shadow-xl ${
                  pkg.name === "Standard" 
                    ? "bg-blue-50 relative" 
                    : "bg-white"
                }`}
              >
                {pkg.name === "Standard" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white border-2 border-black text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                  <p className="text-gray-600 mb-1 text-sm">{pkg.description}</p>
                  <p className="text-xs text-gray-500">{pkg.ideal}</p>
                </div>

                <ul className="grid grid-cols-1 gap-2 mb-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {showEmailForm === pkg.name ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors text-sm ${
                          pkg.name === "Standard"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowEmailForm(null)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <button
                    onClick={() => handlePackageClick(pkg.name)}
                    className={`w-full py-2.5 px-6 rounded-lg font-medium transition-colors text-sm ${
                      pkg.name === "Standard"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {pkg.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <Cta />
    </>
  );
}
