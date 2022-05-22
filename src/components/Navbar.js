import { Link } from "gatsby"
import React from "react"
import { CgSun } from "react-icons/cg"
import * as headerStyles from "../styles/header.module.css"

export default function Navigation() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.innerNav}>
        <div className="brand-section">
          <Link className="brand" to="/">
            Belma Besirevic
          </Link>
        </div>
        <div>
          <nav>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About me</Link>
            <Link to="#">Resume</Link>
          </nav>
        </div>
        <div className={headerStyles.toolbarSection}>
          <nav className={headerStyles.socialNav}>
            <Link to="https://github.com/spunickt" target="_blank">Github</Link>
            <Link to="https://twitter.com/isBelmaTrue" target="_blank">Twitter</Link>
          </nav>
          <Link to="#" className="theme-switcher">
            <CgSun />
          </Link>
        </div>
      </nav>
    </header>
  )
}
