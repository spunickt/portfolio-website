import { Link } from "gatsby"
import React from "react"
import * as footerStyles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <p>Copyright Belma Besirevic ©2022</p>
      <p>
        Made with 💜 and <Link to="https://www.gatsbyjs.com/"> Gatsby</Link>
      </p>
    </div>
  )
}
