import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/Image';
import SEO from '../components/seo';
import { CategoryCard } from '../components/common/CategoryCard';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const CategoryList: React.FC<{
  pageContext: {
    title: string,
    key: string,
    content: Array<{
      title: string,
      href: string,
      description: string,
      icon: string;
    }>
  }
}> = props => {
  return (
    <Layout
      titleScreenContent={(
        <div className="category-card-container">
          {
            props.pageContext.content.map(item => (
              <CategoryCard key={item.href} title={item.title} icon={item.icon as any} href={item.href}>
                { item.description }
              </CategoryCard>
            ))
          }
        </div>
      )}
    >
    </Layout>
  )
}

export default CategoryList;
