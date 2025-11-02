"use client";

import { useState } from "react";

type ConsultationFormData = {
  // Basic Information
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessDescription: string;
  
  // Goals and Actions
  mainGoal: string[];
  desiredAction: string[];
  
  // Branding
  hasLogo: string;
  visualStyle: string;
  themePreference: string;
  inspirationSites: string;
  imageType: string[];
  hasContent: string;
  
  // Page Sections
  desiredSections: string[];
  mainMessage: string;
  
  // Hosting and Features
  hostingPreference: string;
  extraFeatures: string[];
  budgetPackage: string;
  additionalNotes: string;
};

type Props = {
  onSubmit: (data: ConsultationFormData) => Promise<void>;
  loading: boolean;
  error: string | null;
  prefillEmail?: string;
};

export default function DetailedConsultationForm({ onSubmit, loading, error, prefillEmail }: Props) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    businessName: "",
    email: prefillEmail || "",
    phone: "",
    businessDescription: "",
    mainGoal: [],
    desiredAction: [],
    hasLogo: "",
    visualStyle: "",
    themePreference: "",
    inspirationSites: "",
    imageType: [],
    hasContent: "",
    desiredSections: [],
    mainMessage: "",
    hostingPreference: "",
    extraFeatures: [],
    budgetPackage: "",
    additionalNotes: "",
  });

  const handleInputChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business or Brand Name
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your business or brand name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone or WhatsApp (optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Briefly describe what your business does:
          </label>
          <textarea
            value={formData.businessDescription}
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Example: I offer beauty services and want people to book appointments online."
          />
        </div>
      </div>

      {/* Goals Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Goals & Actions</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What's the main goal for your landing page?
          </label>
          <div className="space-y-2">
            {[
              "Get new clients or leads",
              "Get people to contact me",
              "Promote my product or service",
              "Build my personal brand",
              "Other (please specify)"
            ].map((goal) => (
              <label key={goal} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.mainGoal.includes(goal)}
                  onChange={() => handleArrayChange('mainGoal', goal)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What action do you want visitors to take?
          </label>
          <div className="space-y-2">
            {[
              "Fill out a contact form",
              "Join an email list or newsletter",
              "Book a call or appointment",
              "Follow on social media",
              "Buy a digital product",
              "Other"
            ].map((action) => (
              <label key={action} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.desiredAction.includes(action)}
                  onChange={() => handleArrayChange('desiredAction', action)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{action}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Branding & Design</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Do you have a logo or color palette?
          </label>
          <div className="space-y-2">
            {[
              "Yes, I'll provide them",
              "I have something, but it needs polishing",
              "No, please make it look clean and professional"
            ].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="hasLogo"
                  value={option}
                  checked={formData.hasLogo === option}
                  onChange={(e) => handleInputChange('hasLogo', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose your preferred visual style:
          </label>
          <div className="space-y-2">
            {[
              "Modern and minimal",
              "Bright and colorful",
              "Elegant and professional",
              "Bold and dark",
              "Simple and clean"
            ].map((style) => (
              <label key={style} className="flex items-center">
                <input
                  type="radio"
                  name="visualStyle"
                  value={style}
                  checked={formData.visualStyle === style}
                  onChange={(e) => handleInputChange('visualStyle', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{style}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Do you prefer a light or dark theme?
          </label>
          <div className="space-y-2">
            {["Light", "Dark", "No preference"].map((theme) => (
              <label key={theme} className="flex items-center">
                <input
                  type="radio"
                  name="themePreference"
                  value={theme}
                  checked={formData.themePreference === theme}
                  onChange={(e) => handleInputChange('themePreference', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{theme}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Share any websites you like (for inspiration):
          </label>
          <textarea
            value={formData.inspirationSites}
            onChange={(e) => handleInputChange('inspirationSites', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
            placeholder="Example: I love how clean and organized https://example.com looks."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What type of images or visuals should your page have?
          </label>
          <div className="space-y-2">
            {[
              "Real photos (products, people, place)",
              "Illustrations or icons",
              "Minimal and text-focused",
              "I'll upload my own",
              "No preference"
            ].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.imageType.includes(type)}
                  onChange={() => handleArrayChange('imageType', type)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Do you already have the text for your site (about, services, etc.)?
          </label>
          <div className="space-y-2">
            {[
              "Yes, I'll provide it",
              "I have some text but need help rewriting it",
              "No, please write it based on my answers"
            ].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="hasContent"
                  value={option}
                  checked={formData.hasContent === option}
                  onChange={(e) => handleInputChange('hasContent', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Page Structure Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Page Structure</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Which sections would you like on your page?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Intro / Hero section",
              "About or story section",
              "Services or features",
              "Testimonials or reviews",
              "Contact form",
              "Pricing or packages",
              "Social links or footer",
              "FAQ",
              "Other"
            ].map((section) => (
              <label key={section} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.desiredSections.includes(section)}
                  onChange={() => handleArrayChange('desiredSections', section)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{section}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What's your main message or offer?
          </label>
          <textarea
            value={formData.mainMessage}
            onChange={(e) => handleInputChange('mainMessage', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Example: I design social media content for small businesses."
          />
        </div>
      </div>

      {/* Hosting & Features Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Hosting & Features</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            How would you like your landing page hosted?
          </label>
          <div className="space-y-2">
            {[
              "Hosting & Maintenance Plan ($15–$50/month) — Includes your own unique web link, automatic backups, updates, and ongoing maintenance.",
              "Free Hosting (Netlify, Vercel, etc.) — Free hosting with a standard link (like yourname.netlify.app). You'll handle future updates yourself."
            ].map((option) => (
              <label key={option} className="flex items-start">
                <input
                  type="radio"
                  name="hostingPreference"
                  value={option}
                  checked={formData.hostingPreference === option}
                  onChange={(e) => handleInputChange('hostingPreference', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Which extra features interest you most?
          </label>
          <div className="space-y-2">
            {[
              "Performance tracking and insights — See how many people visit your page and what they click (+$15–$30/month)",
              "Smart assistant that answers and captures leads — An AI helper that chats with visitors and sends you their info (+$50/month)",
              "Easy client scheduling — Built-in booking form that connects to your calendar (+$50 setup + $10–$20/month)",
              "Automatic follow-ups — Visitors get welcome or thank-you emails automatically (+$50 setup + $20/month)",
              "SEO visibility setup — Helps your page appear on Google (+$100 one-time)",
              "Google Maps or Business link — Shows your location and reviews (+$50 one-time)",
              "Brand refresh every 6 months — Keeps your site looking new (+$75–$150 per refresh)",
              "Mobile-first responsive design — Your site looks perfect on phones, tablets, and desktops (included in all packages)",
              "Security & backup protection — SSL certificates and regular backups for peace of mind (included in all packages)",
              "None / keep it simple"
            ].map((feature) => (
              <label key={feature} className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.extraFeatures.includes(feature)}
                  onChange={() => handleArrayChange('extraFeatures', feature)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Which package fits your budget best?
          </label>
          <div className="space-y-2">
            {[
              "Standard Landing Page — $500 starting (Includes basic backend like forms or booking, hosting & maintenance $15-30/month)",
              "Advanced Web Pages — $800 for 2 pages, up to $1500 for 5 pages (Includes all from Standard + advanced features, hosting & maintenance $30-50/month)",
              "Not sure yet"
            ].map((pkg) => (
              <label key={pkg} className="flex items-start">
                <input
                  type="radio"
                  name="budgetPackage"
                  value={pkg}
                  checked={formData.budgetPackage === pkg}
                  onChange={(e) => handleInputChange('budgetPackage', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-700">{pkg}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Any extra notes or ideas for your landing page?
          </label>
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Any additional thoughts, ideas, or requirements..."
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="flex justify-end space-x-3 pt-6">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Consultation Request"}
        </button>
      </div>
    </form>
  );
}
