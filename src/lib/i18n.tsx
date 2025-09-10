export const defaultLocale = "en"
export const locales = ["en", "es"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",

    // Hero Section
    heroTitle: "Software Engineer",
    heroDescription:
      "2+ years of experience as Programmer Analyst at Grupo Invercasa / Casavisión, specializing in mobile development, web applications, and process automation.",
    downloadCV: "Download CV",

    //Archivements Section
    achievementsTitle: "Achievements & Diplomas",
    achievementsDescription: "Some of my professional achievements and diplomas",
    viewAchievement: "View Achievement",


    // Skills Section
    skillsTitle: "Skills & Technologies",
    skillsDescription: "Technologies and tools I work with",
    databases: "Databases",
    languages: "Languages & Frameworks",
    extra: "Additional Skills",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsDescription: "Some of the projects I've worked on",
    viewProject: "View Project",

    // Education Section
    educationTitle: "Education & Certifications",
    university1: "Universidad Centroamericana (UCA)",
    university1Duration: "3 years",
    university2: "Universidad Casimiro Sotelo",
    university2Duration: "Final studies",
    certifications: "Certifications",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription: "Feel free to reach out for collaborations or just a friendly hello",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",

    // Footer
    madeWith: "Made with",
    and: "and",
  },
  es: {
    // Navigation
    about: "Acerca de",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Educación",
    contact: "Contacto",

    // Hero Section
    heroTitle: "Ingeniero de Software",
    heroDescription:
      "2+ años de experiencia como Analista Programador en Grupo Invercasa / Casavisión, especializado en desarrollo móvil, aplicaciones web y automatización de procesos.",
    downloadCV: "Descargar CV",

    //Archivements Section
    achievementsTitle: "Logros y Diplomas",
    achievementsDescription: "Algunos de mis logros profesionales y diplomas",
    viewAchievement: "Ver Logro",
    

    // Skills Section
    skillsTitle: "Habilidades y Tecnologías",
    skillsDescription: "Tecnologías y herramientas con las que trabajo",
    databases: "Bases de Datos",
    languages: "Lenguajes y Frameworks",
    extra: "Habilidades Adicionales",

    // Projects Section
    projectsTitle: "Proyectos Destacados",
    projectsDescription: "Algunos de los proyectos en los que he trabajado",
    viewProject: "Ver Proyecto",

    // Education Section
    educationTitle: "Educación y Certificaciones",
    university1: "Universidad Centroamericana (UCA)",
    university1Duration: "3 años",
    university2: "Universidad Casimiro Sotelo",
    university2Duration: "Finalización de estudios",
    certifications: "Certificaciones",

    // Contact Section
    contactTitle: "Ponte en Contacto",
    contactDescription: "No dudes en contactarme para colaboraciones o simplemente para saludar",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",

    // Footer
    madeWith: "By xeppyz",
    and: "y",
  },
} as const
