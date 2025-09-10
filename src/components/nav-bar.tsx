import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"

type T = {
  about?: string
  skills?: string
  projects?: string
  education?: string
  contact?: string
}

type Props = {
  t: T
}

export default function ResponsiveNavbar({ t }: Props) {
  const [open, setOpen] = useState(false)

  // Bloquear scroll cuando el drawer está abierto
  useEffect(() => {
    const original = document.body.style.overflow
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = original || ""
    return () => {
      document.body.style.overflow = original || ""
    }
  }, [open])

  const navItems = [
    { href: "#about", label: t.about || "About" },
    { href: "#skills", label: t.skills || "Skills" },
    { href: "#projects", label: t.projects || "Projects" },
    { href: "#education", label: t.education || "Education" },
    { href: "#contact", label: t.contact || "Contact" },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Portfolio
          </motion.div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <LanguageToggle />
          </div>

          {/* Acciones: botón hamburguesa visible en TODAS las resoluciones */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-accent"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Opcional: si también quieres el botón hamburguesa en desktop, descomenta esto
          <div className="hidden md:flex items-center">
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-accent"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          */}
        </div>
      </motion.nav>

      {/* Drawer/Sidebar: visible en todas las resoluciones cuando open = true */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel lateral derecho */}
            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-50 w-80 sm:w-96 bg-background border-l border-border shadow-2xl"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <span className="font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-accent"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-3 px-3 rounded-md hover:bg-accent text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-4">
                  <LanguageToggle />
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}