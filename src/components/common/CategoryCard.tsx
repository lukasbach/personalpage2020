import * as React from 'react';

import "./categorycard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

export const CategoryCard: React.FC<{
  title: string;
  icon: IconProp;
  href: string
  onClick: (e: any) => any;
}> = props => {

  return (
      <a className="category-card" onClick={props.onClick} href={props.href}>
        <div className="icon">
          <div>
            <FontAwesomeIcon icon={props.icon} size="2x" />
          </div>
        </div>
        <h2>{ props.title }</h2>
        <p>{ props.children }</p>
      </a>
  );
};
