import * as React from 'react'
import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import post from '../styles/post.module.scss'

interface PageTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <>
      <div className={post.container}>
        <h1 className={post.title}>{data.markdownRemark.frontmatter.title}</h1>
        <span className={post.date}>{data.markdownRemark.frontmatter.date}</span>
        <div className={post.text} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
`
