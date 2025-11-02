export default function FAQSection() {
  const faqs = [
    {
      question: "Do I need my own domain?",
      answer: "Yes! You can connect your domain or we can help you purchase one."
    },
    {
      question: "How long will it take?",
      answer: "Landing pages: 1–2 weeks. Full websites: 3–5 weeks."
    },
    {
      question: "Do you work outside Puerto Rico?",
      answer: "Absolutely. We're based in Puerto Rico but serve clients worldwide."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

