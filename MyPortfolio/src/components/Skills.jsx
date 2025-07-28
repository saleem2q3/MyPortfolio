"use client"

import { motion } from "framer-motion"
import { Code, Globe, Database, Award, Zap, Star, Cpu, Palette } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Code,
      skills: ["Python", "Machine Learning", "Data Analysis", "AI Algorithms", "Process Automation", "Neural Networks"],
      color: "blue",
      level: 85,
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js + vite.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "green",
      level: 90,
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Python", "Java", "MongoDB", "MySQL", "API Design"],
      color: "purple",
      level: 80,
    },
    {
      title: "Development Tools",
      icon: Award,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Chrome DevTools"],
      color: "orange",
      level: 88,
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "bg-blue-500",
        progress: "bg-blue-500",
      },
      green: {
        bg: "from-green-50 to-green-100",
        border: "border-green-200",
        text: "text-green-600",
        icon: "bg-green-500",
        progress: "bg-green-500",
      },
      purple: {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "bg-purple-500",
        progress: "bg-purple-500",
      },
      orange: {
        bg: "from-orange-50 to-orange-100",
        border: "border-orange-200",
        text: "text-orange-600",
        icon: "bg-orange-500",
        progress: "bg-orange-500",
      },
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg sm:text-xl text-gray-600">Comprehensive expertise across modern web technologies</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const colorClasses = getColorClasses(category.color)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border rounded-xl sm:rounded-2xl p-6 sm:p-8`}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses.icon} rounded-lg sm:rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <span className={`text-xl sm:text-2xl font-bold ${colorClasses.text}`}>{category.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-full bg-white rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-2 ${colorClasses.progress} rounded-full`}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold">Core Competencies</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300">Key areas where I excel and continue to grow</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Performance</h4>
              <p className="text-xs sm:text-sm text-gray-300">Optimizing applications for speed and efficiency</p>
            </div>
            <div className="text-center">
              <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Design</h4>
              <p className="text-xs sm:text-sm text-gray-300">Creating beautiful and intuitive user interfaces</p>
            </div>
            <div className="text-center">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-2 sm:mb-3" />
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Innovation</h4>
              <p className="text-xs sm:text-sm text-gray-300">Implementing cutting-edge solutions and technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
