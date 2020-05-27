/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const remark = require('remark');
const remarkHtml = require('remark-html');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // const result = await graphql(`
  //   query {
  //     site(siteMetadata: {}) {
  //       siteMetadata {
  //         categories {
  //           title
  //           key
  //           content {
  //             title
  //             href
  //             description
  //             icon
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // result.data.site.siteMetadata.categories.forEach(({ title, key, content }) => {
  //   createPage({
  //     path: `/${key}`,
  //     component: path.resolve(`./src/templates/categoryList.tsx`),
  //     context: { title, key, content },
  //   })
  // })

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              slug
              title
              dominantBg
              actions {
                title
                href
                icon
              }
              attachements {
                card {
                  content
                  href
                  title
                }
                linklist {
                  title
                  items {
                    href
                    title
                    icon
                  }
                }
                gallery {
                  title
                  items {
                    title
                    description
                    image
                  }
                }
                video {
                  id
                  autoplay
                  loop
                }
                textblock
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    for (const att of (node.frontmatter.attachements || [])) {
      if (att.textblock) {
        att.textblock = remark()
          .use(remarkHtml)
          .processSync(att.textblock).toString();
        console.log(att.textblock)
      }
    }
    console.log(node.frontmatter)

    if (!node.frontmatter.dominantBg) {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/mdpage.tsx`),
        context: {
          slug: node.frontmatter.slug,
          frontmatter: node.frontmatter
        },
      })
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/dominantBgPage.tsx`),
        context: {
          slug: node.frontmatter.slug,
          frontmatter: node.frontmatter
        },
      })
    }
  })

}