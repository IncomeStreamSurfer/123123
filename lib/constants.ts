export const TAX_YEARS = {
  '2024-25': {
    personalAllowance: 6000,
    basicRate: {
      property: 18,
      other: 10
    },
    higherRate: {
      property: 28,
      other: 20
    }
  },
  '2023-24': {
    personalAllowance: 6000,
    basicRate: {
      property: 18,
      other: 10
    },
    higherRate: {
      property: 28,
      other: 20
    }
  }
}

export const ASSET_TYPES = [
  { id: 'residential', label: 'Residential Property' },
  { id: 'commercial', label: 'Commercial Property' },
  { id: 'shares', label: 'Shares & Investments' },
  { id: 'crypto', label: 'Cryptocurrency' },
  { id: 'business', label: 'Business Assets' }
]

export const ASSET_SPECIFIC_FIELDS = {
  residential: {
    fields: [
      {
        id: 'propertyAddress',
        label: 'Property Address',
        type: 'text',
        required: true,
      },
      {
        id: 'previouslyLived',
        label: 'Previously Lived In?',
        type: 'checkbox',
        tooltip: 'If you have ever lived in this property as your main residence'
      },
      {
        id: 'improvements',
        label: 'Home Improvements (£)',
        type: 'number',
        placeholder: 'e.g., extensions, renovations'
      }
    ]
  },
  shares: {
    fields: [
      {
        id: 'company',
        label: 'Company Name',
        type: 'text',
        required: true
      },
      {
        id: 'numberOfShares',
        label: 'Number of Shares',
        type: 'number',
        required: true
      },
      {
        id: 'brokerFees',
        label: 'Broker Fees (£)',
        type: 'number'
      }
    ]
  },
  crypto: {
    fields: [
      {
        id: 'cryptoType',
        label: 'Cryptocurrency',
        type: 'text',
        required: true
      },
      {
        id: 'exchangeFees',
        label: 'Exchange Fees (£)',
        type: 'number'
      },
      {
        id: 'walletFees',
        label: 'Wallet Transfer Fees (£)',
        type: 'number'
      }
    ]
  }
} as const

export const FAQ_ITEMS = [
  {
    question: 'How is Capital Gains Tax calculated in the UK?',
    answer: 'Capital Gains Tax (CGT) in the UK is calculated by subtracting the purchase price from the sale price of an asset. The tax rate depends on your income tax band and the type of asset. For 2024/25, basic rate taxpayers pay 10% on assets and 18% on property, while higher rate taxpayers pay 20% on assets and 28% on property.'
  },
  {
    question: 'What is the Capital Gains Tax allowance for 2024/25?',
    answer: 'The Capital Gains Tax allowance for 2024/25 is £6,000. This means you only pay CGT on gains above this threshold.'
  },
  // Add more FAQs...
] 