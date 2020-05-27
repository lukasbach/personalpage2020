import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import { useEffect, useRef, useState } from 'react';
import { CategoryCard } from './common/CategoryCard';

export const Header: React.FC<{
  fullscreen: boolean;
  fullscreenContent?: React.ReactNode;
  hiddenDominant?: boolean;
}> = props => {
  const [isFullScreen, setIsFullscreen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const prev = useRef(props.fullscreen);
  useEffect(() => {
      setTimeout(() => {
        setIsFullscreen(props.fullscreen);
      }, 0);
  }, [props.fullscreen]);

  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site(siteMetadata: {}) {
        siteMetadata {
          categories {
            title
            key
            href
            content {
              title
              href
              description
              icon
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (openCategory) {
      setIsFullscreen(true);
    }
  }, [openCategory]);

  console.log(data.site.siteMetadata.categories?.find(category => category.key === openCategory)?.content)

  return (
    <header className={`${isFullScreen && !isClosing && 'enter'} ${(isClosing || props.hiddenDominant) && 'closing'}`}>
      <BackgroundImage
        Tag="div"
        className="dominant-header"
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>

      <div className="overlay">
        {
          (!props.fullscreenContent && !openCategory) ? (
            <h1 className="title">Lukas Bach</h1>
          ) : (
            <>
              { !openCategory && props.fullscreenContent }
              {
                openCategory && (
                  <div className="category-card-container">
                    {
                      data.site.siteMetadata.categories.map(category => (
                        <div style={{ display: (!openCategory || category.key !== openCategory) && 'none' }}>
                          <div>
                            {
                              category.content.map(item => (
                                <CategoryCard
                                  key={item.href}
                                  title={item.title}
                                  icon={item.icon as any}
                                  href={item.href}
                                  onClick={(e: any) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setIsClosing(true);
                                    setTimeout(() => window.location.replace(item.href), 1000 * .3);
                                  }}
                                >
                                  { item.description }
                                </CategoryCard>
                              ))
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </>
          )
        }
      </div>

      <nav>
        <ul>
          {
            data.site.siteMetadata.categories.map(category => (
              <button onClick={() => {
                console.log(category)
                if (category.href) {
                  setIsClosing(false);
                  setTimeout(() => window.location.replace(category.href), 1000 * .3);
                } else {
                  setOpenCategory(category.key);
                  setIsClosing(false);
                }
              }}>
                <li>{ category.title }</li>
              </button>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};
