import * as React from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FrontMatterImage: React.FC<{
  image: string,
  icoSize?: SizeProp,
  width?: number,
  height?: number,
  alt?: string,
}> = props => {
  if (!props.image) {
    return null;
  }

  if (['.svg', '.png', '.jpg', '.jpeg', '.gif'].find(ext => props.image.includes(ext))) {
    return (
      <img src={props.image} width={props.width} height={props.height} alt={props.alt}
        className={props.image.endsWith('#') ? 'one-color' : ''}/>
    )
  } else {
    return (
      <FontAwesomeIcon icon={(props.image.split('/') as any)} size={props.icoSize}
                       width={props.width} height={props.height} />
    )
  }
};
