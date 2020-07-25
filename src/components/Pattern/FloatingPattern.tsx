import * as React from 'react';
import { PatternName } from './PatternName';

import './patterns.scss';

export const FloatingPattern: React.FC<{
  pattern: PatternName;
  width: number | string;
  height: number | string;
  top: number | string;
  left: number | string;
  opacity?: number;
}> = props => {
  const { width, height, top, left, opacity } = props;

  return (
    <div className="floating-pattern-container">
      <div
        className={`pattern ${props.pattern}`}
        style={{ width, height, top, left, opacity }}
      />
    </div>
  );
};
