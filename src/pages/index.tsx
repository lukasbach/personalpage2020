import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/Image';
import SEO from '../components/seo';
import { CategoryCard } from '../components/common/CategoryCard';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

/*

      <div className="category-card-container">
        <CategoryCard title="Devsession" icon={faCoffee}>
          Hello
        </CategoryCard>
        <CategoryCard title="Devsession" icon={faCoffee}>
          Hello
        </CategoryCard>
        <CategoryCard title="Devsession" icon={faCoffee}>
          Hello
        </CategoryCard>
        <CategoryCard title="Devsession" icon={faCoffee}>
          Hello
        </CategoryCard>
      </div>
 */
const IndexPage = () => (
  <Layout title={false} titleScreenContent={(
    <h1 className="title">Lukas Bach</h1>
  )} />
);

export default IndexPage;
