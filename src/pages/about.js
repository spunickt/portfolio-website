import React from "react"
import Layout from "../components/Layout"
import * as articleStyles from "../styles/article.module.css"


export default function About() {
  return (
    <Layout>
      <section className={articleStyles.article}>
      <h2 >About me</h2>
      <h3>Front End Developer and Designer, currently based in Vienna.</h3>
      </section>
    </Layout>
  )
}
