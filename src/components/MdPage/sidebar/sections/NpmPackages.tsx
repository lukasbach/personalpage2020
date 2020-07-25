import * as React from 'react';
import { MdPageFrontmatter } from '../../MdPage';
import { SidebarInfoSection } from '../../SidebarInfoSection';
import { useEffect, useState } from 'react';
import { NpmPackage } from './NpmPackage';

export const NpmPackages: React.FC<MdPageFrontmatter> = props => {
  if (!props.npm) {
    return null;
  }

  return (
    <>
      <h3>NPM Packages</h3>
      {
        (props.npm || []).map(pkg => (
          <NpmPackage packageName={pkg} />
        ))
      }
    </>
  );
};
