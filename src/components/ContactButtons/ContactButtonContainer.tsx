import * as React from 'react';

import './contactButtons.scss';

export const ContactButtonContainer: React.FC<{
  small: boolean,
  right?: boolean
}> = props => {
  return (
    <div className={"contact-buttons" + (props.small ? ' small' : '') + (props.right ? ' right' : '')}>
      { props.children }
    </div>
  );
};
