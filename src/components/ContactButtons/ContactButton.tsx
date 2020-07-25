import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const ContactButton: React.FC<{
  icon: IconProp,
  href: string,
  noNewTab?: boolean,
  title?: string,
}> = props => {

  return (
    <a href={props.href} target={!props.noNewTab && "_blank"} title={props.title}>
      <FontAwesomeIcon icon={props.icon} size={'2x'} aria-label={props.title} />
      { props.children }
    </a>
  );
};
