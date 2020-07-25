import * as React from 'react';
import Layout from '../Layout/layout';
import { Header } from '../Header/Header';
import { PaddedContent } from '../Layout/PaddedContent';
import Img from "gatsby-image"
import { MdPageSidebar } from './MdPageSidebar';
import { graphql } from 'gatsby';

import "./mdpage.scss";
import { Downloads } from './Downloads';
import { FrontMatterImage } from '../FrontMatterImage';
import { Footer } from '../Footer';
import SEO from '../seo';

export interface MdPageFrontmatter {
  date: string,
  slug: string,
  title: string,
  description: string,
  tags?: string,
  icon: string,
  iconMonochromatic?: string,
  cli?: string,
  download?: string[],
  sonar?: {
    key: string,
    name: string,
    measures: [{ metric: string, value: string, }],
  },
  github?: {
    url: string,
    name: string,
    issuesUrl: string,
    createdAt: string,
    updatedAt: string,
    pushedAt: string,
    issuesCount: number,
    release?: {
      url: string,
      name: string,
      publishedAt: string,
      assets: Array<{ name: string, download: string, size: number }>
    }
  },
  website?: string,
  npm?: string[],
  actions?: Array<{
    title: string,
    href: string,
    icon: string
  }>,
  attachements?: Array<{
    card?: {
      content: string,
      href: string,
      title: string,
    },
    linklist?: {
      title: string,
      items: Array<{
        title: string,
        description: string,
        icon?: string,
      }>
    }
  }>
}

const MdPage: React.FC<{
  pageContext: { frontmatter: MdPageFrontmatter, html: string },
}> = props => {

  return (
    <Layout>
      <SEO
        title={props.pageContext.frontmatter.title}
        description={props.pageContext.frontmatter.description}
        meta={[
          {
            property: 'keywords',
            content: props.pageContext.frontmatter.tags
          }
        ]}
      />
      <Header />
      <PaddedContent className="footer-container">
        <div className="title-container">
          <h1>{ props.pageContext.frontmatter.title }</h1>
          <FrontMatterImage image={props.pageContext.frontmatter.icon} alt="" icoSize="5x" height={48} />
        </div>
        <div className="content-container">
          <section className="text">
            <div dangerouslySetInnerHTML={{ __html: props.pageContext.html }} />
            <Downloads {...props.pageContext.frontmatter} />
          </section>
          <MdPageSidebar {...props.pageContext.frontmatter} />
        </div>
        <Footer />
      </PaddedContent>
    </Layout>
  );
};

export default MdPage;
