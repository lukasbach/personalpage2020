import * as React from 'react';
import { useEffect, useState } from 'react';
import { SidebarInfoSection } from '../../SidebarInfoSection';

export const NpmPackage: React.FC<{ packageName: string }> = ({ packageName }) => {

  return (
    <SidebarInfoSection
      title={packageName}
      icon={'fas/tag'}
      href={`https://www.npmjs.com/package/${packageName}`}
    />
  );
};
