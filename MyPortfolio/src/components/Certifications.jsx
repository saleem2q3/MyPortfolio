"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, Shield, Cloud, Brain } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Red Hat Certified Engineer",
      issuer: "Red Hat",
      date: "2024",
      description:
        "Enterprise Linux systems administration and engineering expertise with hands-on experience in system configuration and management.",
      badge: "RHCE",
      icon: Shield,
      color: "red",
      skills: ["Linux Administration", "System Security", "Network Configuration"],
      verificationUrl: "https://www.credly.com/badges/0f32a1ba-ed5b-4329-b0a0-274c39abbcdb/public_url",
    },
    {
      title: "Multicloud Network Associate",
      issuer: "Cloud Certification Board",
      date: "2024",
      description:
        "Comprehensive understanding of multicloud networking concepts and implementation across various cloud platforms.",
      badge: "MCNA",
      icon: Cloud,
      color: "blue",
      skills: ["Cloud Networking", "Multi-platform Integration", "Network Security"],
      verificationUrl: "https://www.credly.com/badges/97992e86-9f8e-4bbb-8317-f696da3d14b7/public_url",
    },
    {
      title: "AI Associate",
      issuer: "Salesforce",
      date: "October 21, 2024",
      description:
        "Comprehensive certification in Salesforce AI technologies, demonstrating expertise in artificial intelligence implementation and automation within the Salesforce ecosystem.",
      badge: "AI Associate",
      icon: Brain,
      color: "green",
      skills: ["Salesforce AI", "Process Automation", "AI Implementation"],
      verificationUrl: "https://www.salesforce.com/trailblazer/h4h1ggklb360lmzg6fadd",
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      red: {
        bg: "from-red-50 to-orange-50",
        border: "border-red-200",
        icon: "bg-red-500",
        text: "text-red-600",
        badge: "bg-red-100 text-red-800 border-red-200",
      },
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        icon: "bg-blue-500",
        text: "text-blue-600",
        badge: "bg-blue-100 text-blue-800 border-blue-200",
      },
      green: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200",
        icon: "bg-green-500",
        text: "text-green-600",
        badge: "bg-green-100 text-green-800 border-green-200",
      },
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg sm:text-xl text-gray-600">Professional certifications validating technical expertise</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            const colorClasses = getColorClasses(cert.color)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border rounded-2xl sm:rounded-3xl p-6 sm:p-8`}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClasses.icon} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 sm:px-4 sm:py-2 ${colorClasses.badge} border rounded-full text-xs sm:text-sm font-bold flex items-center space-x-1 sm:space-x-2`}
                  >
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{cert.badge}</span>
                    <span className="sm:hidden">{cert.badge.slice(0, 4)}</span>
                  </motion.span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{cert.title}</h3>
                    <p className={`text-base sm:text-lg font-medium ${colorClasses.text}`}>{cert.issuer}</p>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{cert.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Skills</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white/70 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 sm:pt-4">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{cert.date}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(cert.verificationUrl, "_blank")}
                      className="flex items-center space-x-1 sm:space-x-2 bg-white text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">Verify</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
