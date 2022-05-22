import React from "react"
import "../styles/global.css"
import Navbar from "./Navbar"
import * as mainStyles from "../styles/main.module.css"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={mainStyles.layout}>{children}</div>
      <Footer />
    </div>
  )
}
