"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import { AuthProvider } from "../hooks/useAuth"

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR and the first client render, avoid mounting the theme provider so
  // we don't mutate the <html> attributes (class/style) and cause hydration warnings.
  if (!mounted) {
    return (
      <AuthProvider>
        {children}
      </AuthProvider>
    )
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextThemesProvider>
  )
}
