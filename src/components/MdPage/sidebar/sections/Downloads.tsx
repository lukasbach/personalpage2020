import * as React from 'react';
import { MdPageFrontmatter } from '../../MdPage';
import { SidebarInfoSection } from '../../SidebarInfoSection';

export const Downloads: React.FC<MdPageFrontmatter> = props => {
  if (!props.download) {
    return null;
  }

  return (
    <>
      <h3>Downloads</h3>
      <SidebarInfoSection
        title={`${props.download.length} Downloads available`}
        icon="fas/download"
        href="#downloads"
        subtitle="Jump to downloads"
      />
    </>
  );
};
