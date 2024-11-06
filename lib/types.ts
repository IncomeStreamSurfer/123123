export type AssetType = 'residential' | 'commercial' | 'shares' | 'crypto' | 'business'

export interface Field {
  id: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
  tooltip?: string
}

export interface CalculatorFormData {
  assetType: AssetType
  purchasePrice: number
  salePrice: number
  purchaseDate: string
  saleDate: string
  taxYear: string
  income: number
  location: string
  propertyAddress?: string
  previouslyLived?: boolean
  improvements?: number
  company?: string
  numberOfShares?: number
  brokerFees?: number
  cryptoType?: string
  exchangeFees?: number
  walletFees?: number
  [key: string]: any // Allow dynamic fields
}

export interface TaxResult {
  totalGain: number
  taxableGain: number
  taxDue: number
  effectiveRate: number
  allowanceUsed: number
} 