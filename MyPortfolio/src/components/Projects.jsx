"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Users, TrendingUp, Database } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AuctionX",
      description:
        "Revolutionary auction marketplace bringing together collectors, enthusiasts, and sellers from around the world, creating a vibrant marketplace for extraordinary finds.",
      image: "https://img.freepik.com/premium-vector/auctioneer-raising-his-gavel-knock-down-sell-picture-auction_753844-56.jpg?semt=ais_items_boosted&w=740",
      demoLink: "https://saleem2q3.github.io/AuctionX/",
      githubLink: "https://github.com/saleem2q3/AuctionX",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      metrics: {
        categories: "Multiple",
        features: "20+",
        design: "Modern",
      },
      category: "Full-Stack",
      year: "2024",
      status: "Live",
    },
    {
      title: "Career Connect Portal",
      description:
        "Advanced job marketplace platform optimizing recruitment processes with real-time job matching and application tracking.",
      image: "https://www.careerconnect.co.in/assets/CareerConnect-CHv0KAkV.svg",
      tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "REST API"],
      metrics: {
        users: "100+",
        speed: "30s faster",
        processing: "Real-time",
      },
      category: "Backend",
      year: "2024",
      status: "Live",
    },
    {
      title: "AirLinks Booking System",
      description:
        "Enterprise-grade flight booking system handling daily airline operations with secure OTP authentication.",
      image: "https://cdn.sriggle.tech/kantents/production/1/1345/06/4977de6d-a5bc-432f-8606-7c93490633b8.webp",
      tech: ["Java EE", "JSF", "MySQL", "Email API", "Security"],
      metrics: {
        security: "50% improved",
        team: "100+ users",
        operations: "Daily",
      },
      category: "Enterprise",
      year: "2023",
      status: "Production",
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      "Full-Stack": "bg-blue-100 text-blue-800 border-blue-200",
      Backend: "bg-green-100 text-green-800 border-green-200",
      Enterprise: "bg-purple-100 text-purple-800 border-purple-200",
    }
    return colors[category] || colors["Full-Stack"]
  }

  const getStatusColor = (status) => {
    const colors = {
      Completed: "bg-gray-100 text-gray-800",
      Live: "bg-green-100 text-green-800",
      Production: "bg-blue-100 text-blue-800",
    }
    return colors[status] || colors["Completed"]
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group h-64 sm:h-80 lg:h-full"
                  >
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex space-x-3 sm:space-x-4">
                          {project.demoLink ? (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white text-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span className="hidden sm:inline">Live Demo</span>
                              <span className="sm:hidden">Demo</span>
                            </a>
                          ) : (
                            <button className="bg-white text-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm">
                              <ExternalLink className="w-4 h-4" />
                              <span className="hidden sm:inline">Live Demo</span>
                              <span className="sm:hidden">Demo</span>
                            </button>
                          )}
                          {project.githubLink ? (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-900 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 text-sm"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          ) : (
                            <button className="bg-gray-900 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 text-sm">
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className={`space-y-4 sm:space-y-6 p-6 sm:p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span
                      className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium border ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </span>
                    <span
                      className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{project.title}</h3>
                    <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                          {key === "users" && <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                          {key === "categories" && <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />}
                          {key === "features" && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
                          {key === "design" && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                          {key === "satisfaction" && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
                          {key === "speed" && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />}
                          {key === "processing" && <Database className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                          {key === "security" && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />}
                          {key === "team" && <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
                          {key === "operations" && <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />}
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
