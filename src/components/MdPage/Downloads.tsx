import * as React from 'react';
import { MdPageFrontmatter } from './MdPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Downloads: React.FC<MdPageFrontmatter> = props => {
  if (!props.download) {
    return null;
  }

  return (
    <>
      <h2 id="downloads">Downloads</h2>
      <ul className="downloads">
        { props.download.map(dl => dl.split(';')).map(([url, text]) => (
          <a href={url} target="_blank">
            <li>
              <FontAwesomeIcon icon="download" />
              <span>{ text }</span>
            </li>
          </a>
        )) }
      </ul>
    </>
  );
};
