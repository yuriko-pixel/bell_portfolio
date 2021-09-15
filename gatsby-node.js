'use strict'

const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      // component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug
      }
    })
  })
}
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             posts: allMarkdownRemark() {
//               nodes {
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         `
//       ).then((result) => {
//         const posts = result.data.posts.nodes
//         posts.forEach((post) => {
//           createPage({
//             path: post.fields.slug,
//             component: blogPostTemplate,
//             context: {
//               slug: post.fields.slug,
//             },
//           })
//         })
//       })
//     )
//   })
// }
