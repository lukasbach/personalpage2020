import * as React from 'react';

import "./pagecontainer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gallery } from './Gallery';

export const PageContainer: React.FC<{
  title: string,
  actions?: Array<{ title: string, href?: string, }>,
  attachements?: Array<any>;
}> = props => {

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>{ props.title }</h2>
        <div>
          {
            props.actions.map(action => (
              <button>{ action.title }</button>
            ))
          }
        </div>
      </div>
      <div className="page-content page-content-card page-content-card-padded page-content-margin">
        { props.children }
        <pre>{ JSON.stringify(props.attachements, null, 2) }</pre>
      </div>

      {
        props.attachements.map(attachement => (
          attachement.linklist ? (
            <div className="page-content-card page-content-attachement-container page-content-margin">
              {
                attachement.linklist.items.map((item, i) => (
                  <button className="attachement-fullwidth-link" key={i}>
                    { item.icon && <FontAwesomeIcon icon={item.icon} size="lg" /> }
                    { item.title }
                  </button>
                ))
              }
            </div>
          ) : attachement.textblock ? (
            <div className="page-content-card page-content-attachement-container page-content-card-padded page-content-margin">
              <div dangerouslySetInnerHTML={{ __html: attachement.textblock}} />
            </div>
          ) : attachement.gallery ? (
            <Gallery gallery={attachement.gallery} />
          ) : attachement.video ? (
            <div className="page-content-card page-content-attachement-container page-content-margin">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${attachement.video.id}?autoplay=${attachement.video.autoplay}&loop=${attachement.video.loop}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null
        ))
      }
    </div>
  );
};
