import * as React from 'react';

import "./header.scss";
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header: React.FC = props => {
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);
  const [mobileToggled, setMobileToggled] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          namespaces {
            title
            key
          }
        }
      }
    }
  `)

  return (
    <header className={`page-header ${isHoveringTitle && 'hover'} ${mobileToggled && 'mobile-toggled'}`}>
      <Link to="/">
        <div
          onMouseEnter={() => setIsHoveringTitle(true)}
          onMouseLeave={() => setIsHoveringTitle(false)}
          aria-label="Go to homepage"
        >
          lukas<span>bach</span>
        </div>
      </Link>

      <button className="mobile-toggle" onClick={() => setMobileToggled(!mobileToggled)} aria-hidden={true}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav>
        <div className="nav-items">
          {
            data.site.siteMetadata.namespaces.map(namespace => (
              <Link to={`/${namespace.key}`} /*className={(document?.location?.pathname?.slice(1).startsWith(namespace.key) ? 'active' : '')} TODO*/>
                  { namespace.title }
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  )
}