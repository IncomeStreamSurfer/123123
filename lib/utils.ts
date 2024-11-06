import { CalculatorFormData, TaxResult } from './types'
import { TAX_YEARS } from './constants'

export function calculateTax(data: CalculatorFormData): TaxResult {
  // Calculate total gain
  const totalGain = data.salePrice - data.purchasePrice - (data.improvements || 0) - (data.costs || 0)
  
  // Get tax year rates
  const taxYear = TAX_YEARS[data.taxYear as keyof typeof TAX_YEARS]
  const allowance = taxYear.personalAllowance
  
  // Calculate taxable gain (after allowance)
  const taxableGain = Math.max(0, totalGain - allowance)
  
  // Determine tax band based on income + taxable gain
  const totalIncome = data.income + taxableGain
  const basicRateThreshold = 50270 // 2024/25 basic rate threshold
  
  let taxDue = 0
  
  if (data.assetType.includes('property')) {
    if (totalIncome <= basicRateThreshold) {
      // Basic rate for property (18%)
      taxDue = taxableGain * (taxYear.basicRate.property / 100)
    } else if (data.income < basicRateThreshold) {
      // Part basic rate, part higher rate
      const basicRatePortion = basicRateThreshold - data.income
      const higherRatePortion = taxableGain - basicRatePortion
      
      taxDue = (basicRatePortion * (taxYear.basicRate.property / 100)) +
               (higherRatePortion * (taxYear.higherRate.property / 100))
    } else {
      // All higher rate (28%)
      taxDue = taxableGain * (taxYear.higherRate.property / 100)
    }
  } else {
    // Non-property assets (10% basic rate, 20% higher rate)
    if (totalIncome <= basicRateThreshold) {
      taxDue = taxableGain * (taxYear.basicRate.other / 100)
    } else if (data.income < basicRateThreshold) {
      const basicRatePortion = basicRateThreshold - data.income
      const higherRatePortion = taxableGain - basicRatePortion
      
      taxDue = (basicRatePortion * (taxYear.basicRate.other / 100)) +
               (higherRatePortion * (taxYear.higherRate.other / 100))
    } else {
      taxDue = taxableGain * (taxYear.higherRate.other / 100)
    }
  }

  const effectiveRate = totalGain > 0 ? (taxDue / totalGain) * 100 : 0

  return {
    totalGain,
    taxableGain,
    taxDue,
    effectiveRate,
    allowanceUsed: Math.min(totalGain, allowance)
  }
} 