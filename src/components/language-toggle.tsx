"use client"

import { useLocale } from "../hooks/use-locale"
import { Button } from "./ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { locale, changeLocale } = useLocale()

  return (
    <Button variant="ghost" size="sm" onClick={() => changeLocale(locale === "en" ? "es" : "en")} className="gap-2">
      <Globe className="h-4 w-4" />
      {locale === "en" ? "ES" : "EN"}
    </Button>
  )
}
