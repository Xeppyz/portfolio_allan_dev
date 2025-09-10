import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingElements } from "@/components/floating-elements"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import avatar from "../public/avatar_profile.png"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Calendar,
  Database,
  Code,
  Briefcase,
  Star,
  Smartphone,
  Globe,
  Truck,
  Server,
  Monitor,
  ArrowUpRight,
  GraduationCap,
  Award,
  BookOpen,
  Languages,

} from "lucide-react"
import { motion } from "framer-motion"
import ResponsiveNavbar from "./components/nav-bar"
import { Achievements, Achievement } from "./components/achievements"

export default function Portfolio() {
  const { locale } = useLocale()
  const t = translations[locale] || translations["en"]

  const skillsData = {
    databases: [{ name: "SQL Server", level: 85, icon: Database }],
    languages: [
      { name: "Flutter/Dart", level: 90, icon: Code },
      { name: "C# .NET", level: 80, icon: Code },
      { name: "React/TSX", level: 60, icon: Code },
      { name: "React Native", level: 60, icon: Code },
      { name: "Python", level: 50, icon: Code },
      { name: "JavaScript", level: 70, icon: Code },
    ],
    extra: [
      { name: "Process Automation", level: 85, icon: Briefcase },
      { name: "Business Plans", level: 85, icon: Briefcase },
      { name: "Agile Methodologies", level: 90, icon: Briefcase },
    ],
  }

  const projectsData = [
    {
      title: locale === "en" ? "Mobile Equipment Provisioning" : "Aprovisionamiento Móvil de Equipos",
      description:
        locale === "en"
          ? "Flutter mobile application for managing equipment inventory and provisioning workflows in real-time"
          : "Aplicación móvil en Flutter para gestionar inventario de equipos y flujos de aprovisionamiento en tiempo real",
      icon: Smartphone,
      technologies: ["Flutter", "Dart", "SQL Server", "REST API"],
      category: "Mobile",
      status: "Ongoing",
      year: "2024",
    },
    {
      title: locale === "en" ? "Order Management System" : "Sistema de Gestión de Órdenes",
      description:
        locale === "en"
          ? "Comprehensive web platform for order tracking and technical work supervision with real-time updates"
          : "Plataforma web integral para seguimiento de órdenes y supervisión de trabajo técnico con actualizaciones en tiempo real",
      icon: Monitor,
      technologies: ["React", "TypeScript", "C# .NET", "SQL Server"],
      category: "Web",
      status: "Completed",
      year: "2025",
    },
    {
      title: locale === "en" ? "Fleet Management Dashboard" : "Dashboard de Gestión de Flota",
      description:
        locale === "en"
          ? "Advanced reporting system for vehicle fleet management with analytics and automated reporting"
          : "Sistema avanzado de reportes para gestión de flota vehicular con análisis y reportes automatizados",
      icon: Truck,
      technologies: ["React", "Python", "SQL Server", "Power BI"],
      category: "Analytics",
      status: "Completed",
      year: "2024",
    },
    {
      title: locale === "en" ? "RESTful API Services" : "Servicios API RESTful",
      description:
        locale === "en"
          ? "Scalable backend services built with C# .NET providing secure data access and business logic"
          : "Servicios backend escalables construidos con C# .NET proporcionando acceso seguro a datos y lógica de negocio",
      icon: Server,
      technologies: ["C# .NET", "SQL Server", "JWT", "Swagger"],
      category: "Backend",
      status: "Ongoing",
      year: "2024",
    },
    {
      title: locale === "en" ? "React Web Applications" : "Aplicaciones Web React",
      description:
        locale === "en"
          ? "Modern responsive web applications with TypeScript, focusing on user experience and performance"
          : "Aplicaciones web modernas y responsivas con TypeScript, enfocadas en experiencia de usuario y rendimiento",
      icon: Globe,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      category: "Web",
      status: "Ongoing",
      year: "2024",
    },
    {
      title: locale === "en" ? "Process Automation Tools" : "Herramientas de Automatización",
      description:
        locale === "en"
          ? "Custom automation solutions for business processes, reducing manual work and improving efficiency"
          : "Soluciones de automatización personalizadas para procesos de negocio, reduciendo trabajo manual y mejorando eficiencia",
      icon: Briefcase,
      technologies: ["Python", "C# .NET", "SQL Server", "Power Automate"],
      category: "Automation",
      status: "Completed",
      year: "2022",
    },
  ]

  const educationData = [
    {
      institution: locale === "en" ? "Universidad Centroamericana (UCA)" : "Universidad Centroamericana (UCA)",
      degree: locale === "en" ? "Software Engineering" : "Ingeniería de Software",
      duration: locale === "en" ? "3 years completed" : "3 años completados",
      period: "2019 - 2022",
      description:
        locale === "en"
          ? "Comprehensive foundation in software development, algorithms, and system design"
          : "Base integral en desarrollo de software, algoritmos y diseño de sistemas",
      icon: GraduationCap,
      status: "completed",
    },
    {
      institution: locale === "en" ? "Universidad Casimiro Sotelo" : "Universidad Casimiro Sotelo",
      degree: locale === "en" ? "Software Engineering" : "Ingeniería de Software",
      duration: locale === "en" ? "Final studies completion" : "Finalización de estudios",
      period: "2022 - 2023",
      description:
        locale === "en"
          ? "Advanced coursework and capstone project completion"
          : "Cursos avanzados y finalización de proyecto de grado",
      icon: BookOpen,
      status: "completed",
    },
  ]

  const certifications = [
    {
      name: "EPD (English Proficiency Diploma)",
      issuer: locale === "en" ? "keiser international language institute" : "keiser international language institute",
      year: "2025",
      level: locale === "en" ? "Advanced" : "Avanzado",
      icon: Languages,
    },
    {
      name: "Versant English Test",
      issuer: "Pearson",
      year: "2025",
      level: "B2+ Certified",
      icon: Award,
    },
  ]

  const achievements: Achievement[] = [
    {
      title: "Diploma in Software Engineering",
      description: "Universidad Casimiro Sotelo",
      year: "2026 - ongoing",
      fileUrl: "/assets/diploma-software-engineering.pdf",
    },
    {
      title: "English Proficiency Diploma",
      description: "Keiser International Language Institute",
      year: "2025",
      fileUrl: "/EPD_ENGLISH.pdf", // <-- así accedes al archivo en public
    },
    {
      title: "Excellence academic award",
      description: "Universidad Centroamericana (UCA)",
      year: "2022",
      fileUrl: "/Excelencia.pdf",
    }
    // ...más logros
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <FloatingElements />

        {/* Navigation */}
        <ResponsiveNavbar t={t} />

        {/* Hero Section */}
        <section id="about" className="pt-24 pb-16 px-4 min-h-screen flex items-center scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="space-y-4">
                    <motion.div
                      className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Managua, Nicaragua</span>
                      <Calendar className="h-4 w-4 ml-4" />
                      <span>22 years old</span>
                    </motion.div>
                    <motion.h1
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-left leading-tight"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <span className="text-foreground">Software</span>
                      <br />
                      <motion.span
                        className="text-primary"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      >
                        Engineer
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-muted-foreground text-pretty text-left leading-relaxed break-words"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      {t.heroDescription}
                    </motion.p>
                  </div>
                </ScrollReveal>

                {/* Key Stats */}
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { value: "2+", label: "Years Experience" },
                      { value: "5+", label: "Projects" },
                      { value: "6+", label: "Technologies" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="p-4 text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-colors">
                          <CardContent className="p-0">
                            <motion.div
                              className="text-2xl font-bold text-primary"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Action Buttons */}
                <ScrollReveal direction="up" delay={0.6}>
                  <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline">
                        <Download className="mr-2 h-5 w-5" />
                        {t.downloadCV}
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="lg" asChild>
                        <a href="#contact" className="scroll-smooth">
                          <Mail className="mr-2 h-5 w-5" />
                          {t.contact}
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </ScrollReveal>

                {/* Social Links */}
                <ScrollReveal direction="up" delay={0.8}>
                  <div className="flex gap-4">
                    {[
                      { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                      { href: "https://github.com", icon: Github, label: "GitHub" },
                      { href: "mailto:contact@example.com", icon: Mail, label: "Email" },
                    ].map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <motion.div
                          key={social.label}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.6 + index * 0.1 }}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="hover:bg-primary/10 hover:text-primary"
                          >
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                              <IconComponent className="h-5 w-5" />
                              <span className="sr-only">{social.label}</span>
                            </a>
                          </Button>
                        </motion.div>
                      )
                    })}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column - Profile Image */}
              <ScrollReveal direction="right" delay={0.4}>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Background decoration */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl scale-110"
                      animate={{
                        scale: [1.1, 1.2, 1.1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Profile image container */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                        <img
                          src={avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                          loading="eager"
                        />
                      </div>

                      {/* Floating badges */}
                      <motion.div
                        className="absolute -top-4 -right-4 "
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      >
                        <Badge className="text-green-600 dark:text-green-500 border-green-500/20 bg-green-500/5">
                          Available for work
                        </Badge>
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-4 -left-4"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                      >
                        <Badge variant="secondary" className="shadow-lg whitespace-normal break-words">
                          Programmer Analyst
                        </Badge>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-card/30 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.skillsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty text-justify leading-relaxed break-words">
                  {t.skillsDescription}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Databases */}
              <ScrollReveal direction="up" delay={0.2}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Database className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{t.databases}</h3>
                    </div>
                    <div className="space-y-4">
                      {skillsData.databases.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 + i * 0.05 }}
                                >
                                  <Star
                                    className={`h-4 w-4 ${i < Math.floor(skill.level / 20) ? "text-primary fill-primary" : "text-muted-foreground"
                                      }`}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Languages & Frameworks */}
              <ScrollReveal direction="up" delay={0.4}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{t.languages}</h3>
                    </div>
                    <div className="space-y-4">
                      {skillsData.languages.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 + i * 0.05 }}
                                >
                                  <Star
                                    className={`h-3 w-3 ${i < Math.floor(skill.level / 20) ? "text-primary fill-primary" : "text-muted-foreground"
                                      }`}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-primary/80 h-1.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Additional Skills */}
              <ScrollReveal direction="up" delay={0.6}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{t.extra}</h3>
                    </div>
                    <div className="space-y-4">
                      {skillsData.extra.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.1 + i * 0.05 }}
                                >
                                  <Star
                                    className={`h-4 w-4 ${i < Math.floor(skill.level / 20) ? "text-primary fill-primary" : "text-muted-foreground"
                                      }`}
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.9 + index * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.8}>
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {[
                    { value: "6+", label: "Programming Languages" },
                    { value: "2+", label: "Years Experience" },
                    { value: "5+", label: "Major Projects" },
                    { value: "3+", label: "Specializations" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="text-3xl font-bold text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.projectsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty text-justify leading-relaxed break-words">
                  {t.projectsDescription}
                </p>
              </div>
            </ScrollReveal>

            {/* Project Categories Filter */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {["All", "Mobile", "Web", "Backend", "Analytics", "Automation"].map((category, index) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-normal break-words"
                    >
                      {category}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projectsData.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                    <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-primary/20 bg-gradient-to-br from-card to-card/50 overflow-hidden h-full">
                        <CardContent className="p-0 h-full flex flex-col">
                          {/* Project Header */}
                          <div className="p-6 pb-4 flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <motion.div
                                className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                              >
                                <IconComponent className="h-6 w-6" />
                              </motion.div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={project.status === "Completed" ? "default" : "secondary"}
                                  className="text-xs whitespace-normal break-words"
                                >
                                  {project.status}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{project.year}</span>
                              </div>
                            </div>

                            <h3 className="font-bold text-lg mb-2 text-balance group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed text-pretty text-justify mb-4 break-words">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge variant="outline" className="text-xs bg-background/50 whitespace-normal break-words">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>

                            {/* Category Badge */}
                            <div className="flex items-center justify-between mt-auto">
                              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                                {project.category}
                              </Badge>

                              <motion.div whileHover={{ scale: 1.1, rotate: 45 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 p-2"
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                </Button>
                              </motion.div>
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                )
              })}
            </div>

            {/* View More Projects Button */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="text-center mt-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="group bg-transparent">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      <Github className="h-5 w-5" />
                    </motion.div>
                    {locale === "en" ? "View All Projects on GitHub" : "Ver Todos los Proyectos en GitHub"}
                    <motion.div whileHover={{ x: 5, y: -5 }} className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-card/30 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.educationTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty text-justify leading-relaxed break-words">
                  {locale === "en"
                    ? "Academic background and professional certifications that shaped my software engineering journey"
                    : "Formación académica y certificaciones profesionales que moldearon mi trayectoria en ingeniería de software"}
                </p>
              </div>
            </ScrollReveal>

            {/* Education Timeline */}
            <div className="mb-16">
              <ScrollReveal direction="up" delay={0.2}>
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  {locale === "en" ? "Academic Background" : "Formación Académica"}
                </h3>
              </ScrollReveal>

              <div className="relative">
                {/* Timeline line */}
                <motion.div
                  className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="space-y-8">
                  {educationData.map((edu, index) => {
                    const IconComponent = edu.icon
                    return (
                      <ScrollReveal key={index} direction="right" delay={index * 0.2}>
                        <motion.div whileHover={{ scale: 1.02, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-card/50 md:ml-16">
                            <CardContent className="p-8">
                              <div className="flex items-start gap-6">
                                {/* Timeline dot */}
                                <motion.div
                                  className="absolute -left-4 mt-2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg hidden md:flex items-center justify-center"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                                >
                                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                  className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0"
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <IconComponent className="h-6 w-6" />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-balance">{edu.institution}</h4>
                                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                                      {edu.period}
                                    </Badge>
                                  </div>

                                  <p className="text-lg font-semibold text-primary mb-1">{edu.degree}</p>
                                  <p className="text-sm text-muted-foreground mb-3">{edu.duration}</p>
                                  <p className="text-muted-foreground text-pretty text-justify leading-relaxed break-words">
                                    {edu.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </ScrollReveal>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <ScrollReveal direction="up" delay={0.2}>
                <h3 className="text-2xl font-semibold mb-8 text-center">
                  {locale === "en" ? "Professional Certifications" : "Certificaciones Profesionales"}
                </h3>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon
                  return (
                    <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                      <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-card/50">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <motion.div
                                className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                              >
                                <IconComponent className="h-5 w-5" />
                              </motion.div>

                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-bold text-balance">{cert.name}</h4>
                                  <Badge className="bg-primary/10 text-primary">{cert.year}</Badge>
                                </div>

                                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                                <Badge variant="secondary" className="text-xs whitespace-normal break-words">
                                  {cert.level}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>

            {/* Education Stats */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {[
                    { value: "2", label: locale === "en" ? "Universities" : "Universidades" },
                    { value: "4+", label: locale === "en" ? "Years of Study" : "Años de Estudio" },
                    { value: "2", label: locale === "en" ? "Certifications" : "Certificaciones" },
                    { value: "B2+", label: locale === "en" ? "English Level" : "Nivel de Inglés" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="text-3xl font-bold text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
         {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.achievementsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty text-justify leading-relaxed break-words">
                  {t.achievementsDescription}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Achievements items={achievements} />
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.contactTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty text-justify leading-relaxed break-words">
                  {t.contactDescription}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </section>

       

        {/* Footer */}
        <motion.footer
          className="py-8 px-4 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="container mx-auto text-center">
            <motion.p className="text-muted-foreground" whileHover={{ scale: 1.05 }}>
              {t.madeWith} ❤️ React + TypeScript + Tailwind CSS
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </PageTransition>
  )
}