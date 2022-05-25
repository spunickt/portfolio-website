import React from "react"
import "../styles/global.css"
import Navbar from "./Navbar"
import * as styles from "../styles/main.module.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </div>
  )
}
