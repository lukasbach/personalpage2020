import * as React from 'react';
import "./layout.scss";
import { HTMLProps } from 'react';

export const PaddedContent: React.FC<HTMLProps<any>> = props => {
  return (
    <div {...props} className={(props.className || '') + " padded"}>
      { props.children }
    </div>
  );
};
