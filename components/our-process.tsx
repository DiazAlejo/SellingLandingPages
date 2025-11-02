export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery Consultation",
      description: "We learn your goals, audience, and project needs — no obligation."
    },
    {
      number: "02",
      title: "Strategy & Design Planning",
      description: "A custom blueprint and design plan tailored for your business."
    },
    {
      number: "03",
      title: "Code & Construction",
      description: "Your site is built with optimized code for speed, responsiveness, and reliability."
    },
    {
      number: "04",
      title: "Go Live",
      description: "Launch your website on a secure, high-performance platform, fully tested and ready to convert."
    },
    {
      number: "05",
      title: "Continuous Support",
      description: "Ongoing updates, backups, and technical help whenever you need it."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From your vision to a live website, simplified.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-gray-50"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

