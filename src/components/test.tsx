import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'

// const Template: React.FC = (() => (
//   <StaticQuery
//     query={graphql`
//       query indexLayoutQueryAndIndexLayoutQueryAndIndexLayoutQueryAndIndexLayoutQuery {
//         markdownRemark(timeToRead: {}) {
//           fields {
//             slug
//           }
//           frontmatter {
//             date
//             title
//           }
//           html
//         }
//       }
//     `}
//     render={(data) => (
//       <>
//         {data.markdownRemark.html}
//       </>
//     )}
//   />
// )
// )


// export default Template

class Navigation extends React.Component {
  render() {
    console.log(this.props.posts)

    return (
      <>
        {this.props.posts.map(i => <Link to={i.node.fields.slug}>{i.node.frontmatter.title}</Link>)}
      </>
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
