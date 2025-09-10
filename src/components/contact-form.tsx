"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "./ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { translations } from "@/lib/i18n"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const { locale } = useLocale()
  const t = translations[locale]

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = locale === "en" ? "Name is required" : "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = locale === "en" ? "Email is required" : "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === "en" ? "Please enter a valid email" : "Por favor ingresa un correo válido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = locale === "en" ? "Subject is required" : "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = locale === "en" ? "Message is required" : "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        locale === "en" ? "Message must be at least 10 characters" : "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form on success
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus("success")

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alexander.xampos10@gmail.com",
      href: "mailto:alexander.xampos10@gmail.com",
    },
    {
      icon: Phone,
      label: locale === "en" ? "Phone" : "Teléfono",
      value: "+505 7751 7512",
      href: "tel:+50577517512",
    },
    {
      icon: MapPin,
      label: locale === "en" ? "Location" : "Ubicación",
      value: "Managua, Nicaragua",
      href: "https://maps.google.com/?q=Managua,Nicaragua",
    },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4">{locale === "en" ? "Let's Connect" : "Conectemos"}</h3>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {locale === "en"
              ? "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!"
              : "Siempre estoy interesado en nuevas oportunidades y colaboraciones. Ya sea que tengas un proyecto en mente o simplemente quieras charlar sobre tecnología, ¡no dudes en contactarme!"}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20"
              >
                <CardContent className="p-4">
                  <a href={info.href} className="flex items-center gap-4 group-hover:text-primary transition-colors">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Availability Badge */}
        <Card className="border-green-500/20 bg-green-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-green-700 dark:text-green-400">
                  {locale === "en" ? "Available for Work" : "Disponible para Trabajo"}
                </p>
                <p className="text-sm text-green-600 dark:text-green-500">
                  {locale === "en" ? "Open to new opportunities" : "Abierto a nuevas oportunidades"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <p className="font-medium">
                  {locale === "en" ? "Message sent successfully!" : "¡Mensaje enviado exitosamente!"}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                <p className="font-medium">
                  {locale === "en"
                    ? "Failed to send message. Please try again."
                    : "Error al enviar mensaje. Por favor intenta de nuevo."}
                </p>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                  placeholder={locale === "en" ? "Your name" : "Tu nombre"}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder={locale === "en" ? "your.email@example.com" : "tu.correo@ejemplo.com"}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                {locale === "en" ? "Subject" : "Asunto"} *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                  errors.subject ? "border-red-500" : "border-border"
                }`}
                placeholder={locale === "en" ? "What's this about?" : "¿De qué se trata?"}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.message} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-input border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-border"
                }`}
                placeholder={
                  locale === "en"
                    ? "Tell me about your project or just say hello..."
                    : "Cuéntame sobre tu proyecto o simplemente saluda..."
                }
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              <p className="text-xs text-muted-foreground mt-1">
                {formData.message.length}/500 {locale === "en" ? "characters" : "caracteres"}
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              variant="outline"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {locale === "en" ? "Sending..." : "Enviando..."}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.sendMessage}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
