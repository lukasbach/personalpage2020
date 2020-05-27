import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import { PageContainer } from '../components/PageContainer/PageContainer';

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(markdownRemark, data, frontmatter)

  return (
    <Layout
      title={true}
      titleScreenContent={(
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="title-content"
        />
      )}
    />
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        actions {
          href
          title
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
            }
          }
          textblock
        }
      }
    }
  }
`