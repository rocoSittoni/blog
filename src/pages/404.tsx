import React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
        <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 Not found | Roco Sittoni</title>
