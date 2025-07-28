"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg sm:text-xl text-gray-600">Academic excellence in Computer Science Engineering</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Institution Logo/Icon */}
              <div className="text-center md:col-span-1">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </motion.div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">2022 - Present</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Vaddeswaram</span>
                  </div>
                </div>
              </div>

              {/* Degree Information */}
              <div className="md:col-span-2 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology</h3>
                  <p className="text-base sm:text-lg text-blue-600 font-medium mb-1">
                    Computer Science and Engineering
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">KL University, Vaddeswaram</p>
                </div>

                {/* CGPA */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Current CGPA</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">9.04</div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90.4%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Specialization */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Specialization Focus</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2 text-sm">Core Subjects</h5>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>• Data Structures & Algorithms</li>
                        <li>• Web Development</li>
                        <li>• Database Management</li>
                        <li>• Software Engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2 text-sm">AI & IPA Focus</h5>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                        <li>• Artificial Intelligence</li>
                        <li>• Process Automation</li>
                        <li>• Machine Learning</li>
                        <li>• Healthcare Technology</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
