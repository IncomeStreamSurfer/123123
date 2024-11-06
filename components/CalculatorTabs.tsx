'use client'

import { useState } from 'react'
import clsx from 'clsx'

const tabs = [
  { id: 'property', label: 'Property' },
  { id: 'shares', label: 'Shares' },
  { id: 'crypto', label: 'Crypto' }
]

export default function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState('property')

  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm',
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
} 