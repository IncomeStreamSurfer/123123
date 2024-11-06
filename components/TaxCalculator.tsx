'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalculatorFormData, TaxResult, Field, AssetType } from '@/lib/types'
import { calculateTax } from '@/lib/utils'
import { ASSET_TYPES, ASSET_SPECIFIC_FIELDS } from '@/lib/constants'
import TaxResults from './TaxResults'
import Tooltip from './Tooltip'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export default function TaxCalculator() {
  const [formData, setFormData] = useState<CalculatorFormData>({
    assetType: 'residential',
    purchasePrice: 0,
    salePrice: 0,
    purchaseDate: '',
    saleDate: '',
    taxYear: '2024-25',
    income: 0,
    hasNoIncome: false,
    location: 'england',
  })

  const [selectedCategory, setSelectedCategory] = useState<string>('property')
  const [result, setResult] = useState<TaxResult | null>(null)

  const categoryMap = {
    property: ['residential', 'commercial', 'btl'],
    shares: ['shares', 'unit-trust'],
    crypto: ['crypto'],
    business: ['business']
  }

  const filteredAssetTypes = ASSET_TYPES.filter(type => 
    categoryMap[selectedCategory as keyof typeof categoryMap]?.includes(type.id)
  )

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const defaultAssetType = ASSET_TYPES.find(type => 
      categoryMap[category as keyof typeof categoryMap]?.includes(type.id)
    )
    if (defaultAssetType) {
      setFormData(prev => ({ ...prev, assetType: defaultAssetType.id as AssetType }))
    }
  }

  const handleInputChange = (field: string, value: string | number | boolean) => {
    if (field === 'hasNoIncome') {
      setFormData(prev => ({
        ...prev,
        hasNoIncome: value as boolean,
        income: (value as boolean) ? 0 : prev.income
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedResult = calculateTax(formData)
    setResult(calculatedResult)
  }

  const currentAssetFields = ASSET_SPECIFIC_FIELDS[formData.assetType as keyof typeof ASSET_SPECIFIC_FIELDS]?.fields || []

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-8 bg-white rounded-2xl p-8 shadow-lg"
      >
        {/* Asset Category Selection */}
        <motion.div layout className="col-span-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Select Asset Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(categoryMap).map((category) => (
              <motion.button
                key={category}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryChange(category)}
                className={`p-4 rounded-lg text-center transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Asset Type Selection */}
        <motion.div layout className="col-span-full bg-white p-6 rounded-xl border border-gray-200">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Asset Type
          </label>
          <select
            value={formData.assetType}
            onChange={(e) => handleInputChange('assetType', e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {filteredAssetTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Purchase and Sale Details */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Purchase Details
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Price (£)
              </label>
              <input
                type="number"
                value={formData.purchasePrice || ''}
                onChange={(e) => handleInputChange('purchasePrice', Number(e.target.value))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Date
              </label>
              <input
                type="date"
                value={formData.purchaseDate}
                onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900">
              Sale Details
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sale Price (£)
              </label>
              <input
                type="number"
                value={formData.salePrice || ''}
                onChange={(e) => handleInputChange('salePrice', Number(e.target.value))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sale Date
              </label>
              <input
                type="date"
                value={formData.saleDate}
                onChange={(e) => handleInputChange('saleDate', e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </motion.div>

        {/* Income Section */}
        <motion.div layout className="col-span-full bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Income Details</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="hasNoIncome"
                checked={formData.hasNoIncome}
                onChange={(e) => handleInputChange('hasNoIncome', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <label htmlFor="hasNoIncome" className="text-sm font-medium text-gray-700">
                I have no other income
              </label>
            </div>
            
            {!formData.hasNoIncome && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Income (£)
                </label>
                <input
                  type="number"
                  value={formData.income || ''}
                  onChange={(e) => handleInputChange('income', Number(e.target.value))}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your annual income"
                  required={!formData.hasNoIncome}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Dynamic Asset-Specific Fields */}
        <AnimatePresence mode="wait">
          <motion.div
            key={formData.assetType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {currentAssetFields.map((field: Field) => (
              <div key={field.id} className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.tooltip && (
                    <Tooltip content={field.tooltip}>
                      <QuestionMarkCircleIcon className="w-4 h-4 inline-block ml-2 text-gray-400" />
                    </Tooltip>
                  )}
                </label>
                {field.type === 'checkbox' ? (
                  <input
                    type="checkbox"
                    checked={Boolean(formData[field.id])}
                    onChange={(e) => handleInputChange(field.id, e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.id]?.toString() || ''}
                    onChange={(e) => handleInputChange(field.id, field.type === 'number' ? Number(e.target.value) : e.target.value)}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate Tax
        </motion.button>
      </motion.form>

      {result && <TaxResults result={result} />}
    </div>
  )
} 