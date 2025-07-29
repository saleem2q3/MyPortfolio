"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Download, FileText, ExternalLink } from "lucide-react"

export default function ResumeModal({ isOpen, onClose }) {
  const BASE_PATH = "/MyPortfolio" 
  const handleDownload = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement("a")
      link.href = `${BASE_PATH}/2200030827-saleem.pdf`
      link.download = "2200030827-saleem.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open(`${BASE_PATH}/2200030827-saleem.pdf`, "_blank")
    }
  }

  const handleOpenInNewTab = () => {
    window.open(`${BASE_PATH}/2200030827-saleem.pdf`, "_blank")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">Resume - Dudekula Saleem</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Frontend Developer & Computer Science Engineer</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenInNewTab}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 transition-colors"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Open</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center space-x-1 sm:space-x-2 transition-colors"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Download</span>
                </motion.button>

                <button
                  onClick={onClose}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* PDF Display */}
            <div className="h-[calc(95vh-60px)] sm:h-[calc(90vh-80px)] bg-gray-100 relative">
              <iframe
                src={`${BASE_PATH}/2200030827-saleem.pdf#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title="Resume PDF - Dudekula Saleem"
                loading="lazy"
                style={{
                  minHeight: "400px",
                }}
                onError={(e) => {
                  console.error("PDF loading error:", e)
                  // Show fallback
                  const fallback = document.getElementById("pdf-fallback")
                  if (fallback) {
                    fallback.style.display = "flex"
                  }
                }}
              />

              {/* Fallback for browsers that don't support PDF viewing */}
              <div
                id="pdf-fallback"
                className="absolute inset-0 bg-white flex-col items-center justify-center p-8 text-center hidden"
              >
                <FileText className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF Preview Not Available</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your browser doesn't support inline PDF viewing. Please download the file or open it in a new tab.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpenInNewTab}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Open in New Tab</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
