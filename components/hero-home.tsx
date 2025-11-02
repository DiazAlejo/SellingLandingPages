"use client";
import PageIllustration from "@/components/page-illustration";
import { captureEmail, isValidEmail } from "@/lib/email-capture";

export default function HeroHome() {

  // local email state for quick capture
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
    // Open modal immediately for snappy UX
    handleClick(email);
    // Fire-and-forget capture (non-blocking)
    captureEmail(email, 'hero_section');
  };

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Email form at the top */}
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
                  className="w-[28rem] rounded-md border px-3 py-2"
                />
                <button
                  type="submit"
                  className="w-40 rounded-full bg-blue-600 px-3 py-2 text-white"
                >
                  Get Started!
                </button>
              </form>
            </div>
          </div>

          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-5xl font-bold md:text-6xl"
            >
              Web Pages That Deliver <br className="max-lg:hidden" />
              Real Results
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-600"
              >
                At ClicksyDev, we create fast, visually stunning websites and landing pages designed to capture leads and grow your business. Professional, creative, and results-driven — we make your ideas come to life online.
              </p>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-4xl"
          >
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-50 to-white px-8 py-6 shadow-xl border border-blue-100">
              {/* Browser mockup */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">
                    yourbusiness.com
                  </div>
                </div>
                <div className="w-6 h-6"></div>
              </div>
              
              {/* Landing page preview */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    <span className="font-bold text-gray-800">Brand</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-600">Home</span>
                    <span className="text-gray-600">Pages</span>
                    <span className="text-gray-600">About</span>
                    <span className="text-gray-600">Contact</span>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                  <div className="flex gap-2 justify-center">
                    <div className="h-8 bg-gray-400 rounded px-4 flex items-center">
                      <span className="text-white text-sm">Button</span>
                    </div>
                    <div className="h-8 bg-gray-200 rounded px-4 flex items-center">
                      <span className="text-gray-500 text-sm">Button</span>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-16 mx-auto mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-16 mx-auto mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-16 mx-auto mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-20 mx-auto"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
                  <div className="h-7 bg-gray-400 rounded px-4 flex items-center justify-center mx-auto w-24">
                    <span className="text-white text-xs">Action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


