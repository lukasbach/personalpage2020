/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const remark = require('remark');
const remarkHtml = require('remark-html');
const fetch = require('node-fetch');

const fetchGet = (url) => new Promise(res => fetch(url).then(result => result.json().then(res)));

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
      site {
        siteMetadata {
          namespaces {
            key title
            categories {
              key title description icon
              content {
                description href icon title
              }
            }
          }
        }
      }
    
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              slug category title description icon iconMonochromatic tags date
              sonar github website npm cli travis download
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

  for (const { key, title, href, categories } of result.data.site.siteMetadata.namespaces) {
    if (categories) {
      const pages = result.data.allMarkdownRemark.edges
        .map(edge => edge.node.frontmatter)
        .filter(page => categories.find(c => c.key === page.category))
        .sort((p1, p2) => new Date(p2.date) - new Date(p1.date));

      createPage({
        path: href || `/${key}`,
        component: path.resolve(`./src/components/CategoryList/CategoryList.tsx`),
        context: {
          key, title, pages, categories
        },
      })
    } else {
      // TODO
    }
  }

  for (const { node } of result.data.allMarkdownRemark.edges) {
    for (const att of (node.frontmatter.attachements || [])) {
      if (att.textblock) {
        att.textblock = remark()
          .use(remarkHtml)
          .processSync(att.textblock).toString();
        console.log(att.textblock)
      }
    }
    console.log(node.frontmatter)

    if (node.frontmatter.sonar) {
      node.frontmatter.sonar = (await fetchGet(`https://sonarcloud.io/api/measures/component`
        + `?component=${node.frontmatter.sonar}&metricKeys=ncloc,bugs,classes,code_smells,functions,files,lines,ncloc_language_distribution,`
        + `cognitive_complexity,functions&component=key`)).component
    }

    if (node.frontmatter.github) {
      const repoPath = node.frontmatter.github
      const {
        html_url, full_name, forks_count, stargazers_count, watchers_count, open_issues_count, issues_url,
        releases_url, created_at, pushed_at, updated_at, has_issues
      } = await fetchGet(`https://api.github.com/repos/${repoPath}`)

      node.frontmatter.github = {
        url: html_url,
        name: full_name,
        issuesUrl: `https://github.com/${repoPath}/issues`,
        createdAt: created_at,
        updatedAt: updated_at,
        pushedAt: pushed_at,
        issuesCount: open_issues_count,
        release: undefined
      }

      try {
        const {
          html_url, name, published_at, assets, tag_name
        } = await fetchGet(`https://api.github.com/repos/${repoPath}/releases/latest`)
        node.frontmatter.github.release = {
          url: html_url,
          name: name || tag_name,
          publishedAt: published_at,
          assets: assets.map(asset => ({
            name: asset.name, download: asset.browser_download_url, size: asset.size,
          }))
        }
      } catch(e) {}

    }

    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/components/MdPage/MdPage.tsx`),
      context: {
        slug: node.frontmatter.slug,
        frontmatter: node.frontmatter,
        html: node.html
      },
    })

    // if (!node.frontmatter.dominantBg) {
    //   createPage({
    //     path: node.frontmatter.slug,
    //     component: require.resolve(`./src/templates/mdpage.tsx`),
    //     context: {
    //       slug: node.frontmatter.slug,
    //       frontmatter: node.frontmatter
    //     },
    //   })
    // } else {
    //   createPage({
    //     path: node.frontmatter.slug,
    //     component: require.resolve(`./src/templates/dominantBgPage.tsx`),
    //     context: {
    //       slug: node.frontmatter.slug,
    //       frontmatter: node.frontmatter
    //     },
    //   })
    // }
  }

}