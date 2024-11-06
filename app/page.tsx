import CalculatorTabs from '@/components/CalculatorTabs'
import TaxCalculator from '@/components/TaxCalculator'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: 'UK Capital Gains Tax Calculator 2024/25 | Property, Shares & Crypto',
  description: 'Free HMRC-aligned capital gains tax calculator for UK property, shares, crypto & more. Calculate CGT on property sales, inheritances, and investments for 2024/25.',
  keywords: 'capital gains tax calculator, capital gains tax calculator uk, hmrc capital gains tax calculator, property capital gains tax calculator, crypto capital gains tax calculator'
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-blue-900">
      <header className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-900">
            UK Capital Gains Tax Calculator 2024/25
          </h1>
          <p className="mt-2 text-blue-700">
            Calculate capital gains tax on property, shares, crypto & more
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <CalculatorTabs />
          <TaxCalculator />
        </div>

        <section className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            About Capital Gains Tax
          </h2>
          <p className="mt-4 text-gray-600">
            Calculate your capital gains tax liability for various assets including residential property, 
            commercial property, shares, and cryptocurrency. Our calculator uses the latest HMRC rates 
            and allowances for 2024/25.
          </p>

          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            Current Tax Rates (2024/25)
          </h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Basic rate taxpayers: 10% (18% for residential property)</li>
            <li>• Higher rate taxpayers: 20% (28% for residential property)</li>
            <li>• Annual exempt amount: £6,000</li>
          </ul>
        </section>

        <FAQSection />
      </div>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2024 Calculate Your Capital Gains Tax | Data aligned with HMRC guidelines
          </p>
        </div>
      </footer>
    </main>
  )
} 