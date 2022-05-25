import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {graphql} from 'gatsby'

export default function ProjectDetails({data}) {
  console.log(data)
  const { html } = data.markdownRemark 
  const { title, stack, featuredImage} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>
          <GatsbyImage image={featuredImage.childImageSharp.gatsbyImageData} alt="featured" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}


export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            transformOptions: {grayscale: true}
          )
        }
      }
    }
  }
}
`