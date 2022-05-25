import React from "react"
import Layout from "../components/Layout"
import * as artcleStyles from "../styles/article.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={artcleStyles.article}>
        <h2>Hello, I'm Belma</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio
          dolore saepe, illo magni odio nulla et facilis accusamus quam fuga
          iusto quod rerum unde excepturi recusandae enim animi? Vero!
        </p>
        </section>
    </Layout>
  )
}