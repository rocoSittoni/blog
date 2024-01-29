import React, { lazy, useEffect, useState } from "react"
import '../styles/index.scss';
const Navigation = lazy(() => import("./navigation"))
const Footer = lazy(() => import("./footer"))

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

  function getDefaultTheme() {
    const savedTheme: string | null = window.localStorage.getItem('theme');
    return savedTheme?.includes('dark') ? true : false;
  }

  const [isDark, setIsDark] = React.useState<boolean>(getDefaultTheme())

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark])

  const onUpdateTheme = (value: boolean) => {
    value ? setIsDark(true) : setIsDark(false);
  }

  return (
    <div className="Layout">
      <Navigation onUpdateTheme={(value: boolean) => {onUpdateTheme(value)}} isDark={isDark} />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout