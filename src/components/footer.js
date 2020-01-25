import React from "react"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <footer
      style={{
        ...{
          textAlign: `center`,
          bottom: 0,
          width: `100%`,
        },
      }}
    >
      <p
        style={{
          marginBottom: 0,
        }}
      >
        <a href={"https://www.linkedin.com/in/hansa-mustada"}>hansamustada</a>, <a href={"https://www.linkedin.com/in/satriahrh"}>satriahrh</a> © {new Date().getFullYear()} |{" "}
        <Link to={"/tentang-kami"}>tentang kami</Link> |{" "}
        <Link to={"/layanan"}>layanan</Link> |{" "}
        <Link to={"/kontak"}>kontak</Link>
      </p>
    </footer>
  )
}

export default Footer
