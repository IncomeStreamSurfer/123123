'use client'

import { motion } from 'framer-motion'
import { TaxResult } from '@/lib/types'

interface TaxResultsProps {
  result: TaxResult
}

export default function TaxResults({ result }: TaxResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Your Tax Calculation
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Gain</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-blue-600"
            >
              £{result.totalGain.toLocaleString()}
            </motion.span>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="h-full bg-blue-500"
              transition={{ delay: 0.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Tax Due</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-indigo-600"
            >
              £{result.taxDue.toLocaleString()}
            </motion.span>
          </div>
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(result.taxDue / result.totalGain) * 100}%` }}
              className="h-full bg-indigo-500"
              transition={{ delay: 0.2 }}
            />
          </div>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/50 p-4">
            <span className="text-sm text-gray-600">Taxable Gain</span>
            <p className="text-xl font-semibold mt-1">£{result.taxableGain.toLocaleString()}</p>
          </div>
          
          <div className="rounded-lg bg-white/50 p-4">
            <span className="text-sm text-gray-600">Allowance Used</span>
            <p className="text-xl font-semibold mt-1">£{result.allowanceUsed.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 