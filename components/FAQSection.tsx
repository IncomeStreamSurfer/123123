export default function FAQSection() {
  const faqs = [
    {
      question: 'What is Capital Gains Tax?',
      answer: 'Capital Gains Tax (CGT) is a tax on the profit when you sell an asset that has increased in value. It\'s the gain you make that\'s taxed, not the amount of money you receive.'
    },
    {
      question: 'How is Capital Gains Tax calculated in the UK?',
      answer: 'CGT is calculated by subtracting the purchase price from the sale price, considering allowable deductions. The rate depends on your income tax band and the type of asset.'
    },
    // Add more FAQs
  ]

  return (
    <section className="mt-12 bg-white rounded-lg shadow">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6 first:pt-0">
              <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
} 