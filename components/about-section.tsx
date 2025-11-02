export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Column - About ClicksyDev */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              About ClicksyDev
            </h2>
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              We help small businesses go digital fast, professional, and creative.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              From Puerto Rico to the world, ClicksyDev creates landing pages and small websites that combine modern design with measurable results. Every project is mobile-ready, visually striking, and backed by bilingual support for a smooth, hands-on experience.
            </p>
            <p className="text-lg text-gray-600">
              Our approach focuses on clarity, performance, and conversion. We work closely with each client to understand their goals, target audience, and brand identity, then deliver a digital presence that not only looks exceptional but drives real business growth.
            </p>
          </div>

          {/* Right Column - Behind the Code */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Behind the Code
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Alejandro A. Díaz Medina
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-4">
                Software Engineer
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              I'm a Founder & Fullstack Engineer with a passion for turning ideas into powerful digital experiences. I handle everything from intuitive frontends to scalable backends and seamless databases, crafting products that look great and perform even better.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Technology, design, and problem-solving are at the heart of what I do. Whether it's a bold new startup concept or a complete digital transformation, I love building innovative, functional, and user-focused solutions that make an impact.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/alejandroadiazz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

