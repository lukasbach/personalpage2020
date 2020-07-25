import React from 'react';
import CategoryList from '../components/CategoryList/CategoryList';

const Category: React.FC<{
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
    <CategoryList pageContext={props.pageContext} />
  );
}

export default Category;
