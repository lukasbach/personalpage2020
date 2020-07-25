import React from 'react';

export const Footer: React.FC<{}> = props => {
  return (
    <footer>
      © 2020 Lukas Bach -{' '}
      <a href="/impress">Impress</a> -{' '}
      Square Pattern by <a href="http://www.heropatterns.com/" target="_blank">HeroPatterns</a>{' '}
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
    </footer>
  );
};
