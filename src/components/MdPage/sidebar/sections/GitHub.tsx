import * as React from 'react';
import { MdPageFrontmatter } from '../../MdPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarInfoSection } from '../../SidebarInfoSection';

// https://stackoverflow.com/a/14919494/2692307
function humanFileSize(bytes, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}

export const GitHub: React.FC<MdPageFrontmatter> = props => {
  if (!props.github) {
    return null;
  }

  console.log(props.github)

  return (
    <>
      <h3>GitHub</h3>
      <SidebarInfoSection title="Issues" href={props.github.issuesUrl} metainfo={'' + props.github.issuesCount} />
      <SidebarInfoSection title="Created at" href={props.github.url} metainfo={new Date(props.github.createdAt).toLocaleDateString()} />
      <SidebarInfoSection title="Updated at" href={props.github.url} metainfo={new Date(props.github.updatedAt).toLocaleDateString()} />
      { props.github.release && (
        <>
          <SidebarInfoSection
            title={`Latest Release`}
            href={props.github.release.url}
            metainfo={new Date(props.github.release.publishedAt).toLocaleDateString()}
            subtitle={props.github.release.name}
          />
          { props.github.release.assets.map(asset => (
            <SidebarInfoSection
              icon="fas/download"
              title={asset.name}
              href={asset.download}
              subtitle={humanFileSize(asset.size, true, 2)}
            />
          )) }
        </>
      ) }
    </>
  );
};
