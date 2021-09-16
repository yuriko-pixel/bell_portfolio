import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import blog from '../styles/blog.module.scss'

class Navigation extends React.Component {
  render() {
    console.log(this.props.posts)

    return (
      <div className={blog.posts}>
        {this.props.posts.map(i =>
          <p>
            <Link to={i.node.fields.slug}>
              <div className={blog.flex}>
                <span className={blog.title}>{i.node.frontmatter.title}</span>
                <div className={blog.date}>{i.node.frontmatter.date}</div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: i.node.html }} className={blog.text} />
            </Link>

          </p>
        )}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Navigation site={data.site} posts={data.allMarkdownRemark.edges} />
    )}
  />
)
