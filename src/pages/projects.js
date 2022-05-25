import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as projectStyles from "../styles/projects.module.css"
import * as articleStyles from "../styles/article.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data.projects)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={articleStyles.article}>
      <h2>My Projects</h2>
      </div>
      <section className={projectStyles.projectGrid}>
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div className={projectStyles.projectBox}>
              <h3>{project.frontmatter.title}</h3>
              <GatsbyImage
                image={getImage(project.frontmatter.thumb)}
                alt={project.frontmatter.slug}
              />
              <p>{project.frontmatter.description}</p>
              <p>{project.frontmatter.date}</p>
            </div>
          </Link>
        ))}
      </section>
      <p className={projectStyles.collab}>
        Collaborate with me? Contact me:{" "}
        <a className={projectStyles.a} href="mailto:belmab@protonmail.com">
          {contact}
        </a>
      </p>
    </Layout>
  )
}

// export query data
export const query = graphql`
  query Projects {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
          description
          title
          slug
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
