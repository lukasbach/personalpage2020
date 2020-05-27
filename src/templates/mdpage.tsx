import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import { PageContainer } from '../components/PageContainer/PageContainer';

export default function Template(props) {
  const { markdownRemark } = props.data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(props)

  return (
    <Layout title={false} hiddenDominant={true}>
      <PageContainer
        title={props.pageContext.frontmatter.title}
        actions={props.pageContext.frontmatter.actions}
        attachements={props.pageContext.frontmatter.attachements}
      >
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PageContainer>
    </Layout>
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
      }
    }
  }
`