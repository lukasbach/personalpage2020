import React from 'react';
import { Header } from '../Header/Header';

import "./categorylist.scss";
import "../Layout/layout.scss";
import Layout from '../Layout/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { PaddedContent } from '../Layout/PaddedContent';
import { FrontMatterImage } from '../FrontMatterImage';
import { Footer } from '../Footer';

const CategoryList: React.FC<{
  pageContext: {
    key: string,
    title: string,
    categories: Array<{
      key: string,
      title: string,
      description: string,
      icon: string;
    }>,
    pages: Array<{
      slug: string,
      title: string,
      category: string,
      icon: string,
      iconMonochromatic: string,
      description: string,
      tags: string
    }>
  }
}> = props => {
  const { key, title, categories, pages } = props.pageContext

  return (
    <Layout>
      <Header />

      <PaddedContent className="footer-container">
        {
          categories.map(category => (
            <>
              <h1>{ category.title }</h1>
              <ul className="category-list">
                {
                  pages.filter(({ category: pageCategory }) => pageCategory === category.key).map((page) => (
                    <Link to={page.slug}>
                      <li>
                        <div>
                          <FrontMatterImage image={page.iconMonochromatic || page.icon} height={48} icoSize="3x" />
                        </div>
                        <div>
                          <h2>{ page.title }</h2>
                          <p>{ page.description }</p>
                          <div className="taglist">
                            {
                              page.tags?.split(',').map(tag => {
                                const [name, ...icon] = tag.split('/')
                                return (
                                  <span>
                                    { icon && <FontAwesomeIcon icon={icon as any} /> }
                                    { name }
                                  </span>
                                )
                              })
                            }
                          </div>
                        </div>
                      </li>
                    </Link>
                  ))
                }
              </ul>
            </>
          ))
        }
        <Footer />
      </PaddedContent>
    </Layout>
  )
}

export default CategoryList;
