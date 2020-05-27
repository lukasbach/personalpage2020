import * as React from 'react';
import { useState } from 'react';

export const Gallery: React.FC<{
  gallery: {
    items: Array<{
      title: string,
      description: string,
      image: string,
    }>
  }
}> = props => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage)

  return (
    <div className="">
      <div className="page-content-attachement-gallery-container">
        <div className="page-content-margin page-content-attachement-container">
          <img src={props.gallery.items[0].image} style={{ opacity: 0, width: '100%' }}  />
        </div>
        {
          props.gallery.items.map((item, i) => (
            <div
              className={[
                'image page-content-card page-content-attachement-container page-content-margin',
                i === currentImage && 'current',
                i === currentImage - 1 && 'before',
                i === currentImage + 1 && 'after',
                i === currentImage - 2 && 'before2',
                i === currentImage + 2 && 'after2',
              ].join(' ')}
              onClick={() => setCurrentImage(i)}
            >
              <img
                src={item.image}
              />
              {
                item.title && (
                  <div className="title">
                    <h3>{ item.title }</h3>
                    <p>{ item.description }</p>
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};
