import Image from "next/image";

export default function WhatWeOffer() {
  const benefits = [
    "Lightning-fast load times",
    "Mobile-first responsive design",
    "Bilingual (English & Spanish)",
    "Easy contact forms or booking integration",
    "SEO and analytics setup"
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-6 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Landing Pages & Small Websites
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Landing Pages */}
          <div className="p-8 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Landing Pages
            </h3>
            <p className="text-gray-600 mb-6">
              One-page designs focused on lead capture, marketing campaigns, or product promotions. Fast, clean, and conversion-optimized.
            </p>
          </div>

          {/* Complete Websites */}
          <div className="p-8 rounded-xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-white relative">
            <div className="absolute -top-4 right-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                Optional
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Websites
            </h3>
            <p className="text-gray-600 mb-6">
              Up to 5 pages for businesses that want a full digital presence with multiple sections and advanced features.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-6 py-3 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
              <h3 className="text-xl font-semibold text-gray-900">
                Key Benefits:
              </h3>
            </div>
          </div>
          <div className="p-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

