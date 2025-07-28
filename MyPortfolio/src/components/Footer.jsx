"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Code, Coffee, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/saleem2q3", label: "GitHub", color: "hover:text-gray-900" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saleem-dudekula-314122253/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: Mail, href: "mailto:ssaleem2409@gmail.com", label: "Email", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {/* Brand Section */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Dudekula Saleem</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Frontend Developer & Engineer</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md">
                Crafting exceptional digital experiences with modern web technologies. Passionate about clean code,
                innovative solutions, and continuous learning.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {["About", "Projects", "Education", "Skills", "Contact"].map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Legal</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 py-6 sm:py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-400 text-xs sm:text-sm">© {currentYear} All rights reserved.</p>
              <motion.div
                className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm"
                whileHover={{ scale: 1.05 }}
              >
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
             
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
