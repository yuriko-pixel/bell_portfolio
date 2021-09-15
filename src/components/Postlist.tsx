import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby'

interface StaticQueryPost {
  allMarkdownRemark: {
    edges: {
      node: {
        id: number
        html: string
        fields: {
          slug: string
        }
      }
    }
  }
}

const Postlist: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query indexLayoutQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryPost) => (
      <>
        {data.allMarkdownRemark.edges.node.id}
      </>
    )}
  />
)

export default Postlist;
