import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarInfoSection: React.FC<{
  title: string,
  subtitle?: string,
  metainfo?: string,
  icon?: string,
  href: string,
}> = props => {

  return (
    <a href={props.href} className="info-section" target={props.href?.startsWith('#') ? '' : '_blank'}>
      { props.icon && <div className="ico">
        <FontAwesomeIcon icon={(props.icon.split('/') as any)} />
      </div> }
      <div>
        <h4>{ props.title } <span className="meta">{ props.metainfo }</span></h4>
        <p>{ props.subtitle }</p>
      </div>
    </a>
  );
};
