"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Calendar, Award, Target, Heart, Github, Linkedin, Code, Trophy, Zap } from "lucide-react"

export default function Profile() {
  const profileData = {
    image: "/images/profile.jpg",
    name: "DUDEKULA SALEEM",
    title: "Frontend Developer & Computer Science Engineer",
    location: "KL University, Vaddeswaram",
    email: "ssaleem2409@gmail.com",
    phone: "+91-9121347377",
    age: "20 years",
    cgpa: "9.04",
    objective:
      "Passionate Computer Science Engineering student specializing in AI & IPA (Artificial Intelligence & Intelligent Process Automation). Dedicated to creating innovative solutions through modern web technologies and artificial intelligence. Currently pursuing B.Tech in CSE with strong academic performance and hands-on project experience in healthcare management systems and automation.",
    specializations: [
      "AI & Machine Learning",
      "Intelligent Process Automation",
      "Frontend Development",
      "Full-Stack Development",
    ],
    interests: ["Artificial Intelligence", "Process Automation", "Web Development", "UI/UX Design", "Innovation"],
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/saleem2q3",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saleem-dudekula-314122253/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Code,
      label: "CodeChef",
      href: "https://www.codechef.com/users/klu_2200030827",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      icon: Zap,
      label: "LeetCode",
      href: "https://leetcode.com/u/ssaleem2409/",
      color: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      icon: Trophy,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/ssaleem2409",
      color: "bg-green-600 hover:bg-green-700",
    },
  ]

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Profile</h2>
          <p className="text-lg sm:text-xl text-gray-600">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Simple Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-lg"
                >
                  <img
                    src={profileData.image || "/placeholder.svg?height=200&width=200&text=Profile"}
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h3>
              <p className="text-blue-600 font-medium mb-4 sm:mb-6 text-sm sm:text-base">{profileData.title}</p>

              <div className="space-y-2 sm:space-y-3 text-left mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{profileData.phone}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${social.color} text-white px-2 py-2 sm:px-3 sm:py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 shadow-md hover:shadow-lg`}
                      >
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">{social.label}</span>
                        <span className="sm:hidden text-xs">{social.label.slice(0, 4)}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Objective & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Objective */}
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Objective</h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{profileData.objective}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">Age</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-green-600">{profileData.age}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="font-medium text-gray-900 text-sm sm:text-base">CGPA</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-purple-600">{profileData.cgpa}</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Specializations</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.specializations.map((spec, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-default border border-indigo-200"
                  >
                    {spec}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Interests & Passions</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-default border border-pink-200"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
