"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Award, TrendingUp, Users, Clock } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+", color: "blue" },
    { icon: Database, label: "Records Managed", value: "100+", color: "green" },
    { icon: Users, label: "User Satisfaction", value: "90%", color: "purple" },
    { icon: Clock, label: "CGPA Score", value: "9.04", color: "orange" },
  ]

  const highlights = [
    {
      icon: TrendingUp,
      title: "AI & Machine Learning",
      description: "Specializing in Artificial Intelligence and Intelligent Process Automation solutions",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "Expertise in MERN stack with focus on responsive frontend design and automation",
      color: "green",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining 9.04 CGPA while developing practical AI and automation projects",
      color: "purple",
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences with modern web technologies
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${getColorClasses(stat.color)} border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm font-medium opacity-80">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getColorClasses(highlight.color)} border rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
