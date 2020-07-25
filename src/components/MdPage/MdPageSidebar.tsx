import * as React from 'react';
import { MdPageFrontmatter } from './MdPage';
import { NpmPackages } from './sidebar/sections/NpmPackages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Sonar } from './sidebar/sections/Sonar';
import { GitHub } from './sidebar/sections/GitHub';
import { FrontMatterImage } from '../FrontMatterImage';
import { Cli } from './sidebar/sections/Cli';
import { Downloads } from './sidebar/sections/Downloads';

export const MdPageSidebar: React.FC<MdPageFrontmatter> = props => {
  return (
    <div className="infobar">
      <FrontMatterImage image={props.icon} alt="" icoSize="10x" />
      <h2 style={{ display: 'none' }}>Information</h2>
      { props.website && (
        <a href={props.website} target="_blank" className="button"><FontAwesomeIcon icon="external-link-alt" />Go to Website</a>
      )}
      { props.github && (
        <a href={`https://github.com/${props.github.url}`} target="_blank" className="button"><FontAwesomeIcon icon={['fab', 'github']} />GitHub Repo</a>
      )}
      <Cli {...props} />
      <Downloads {...props} />
      <GitHub  {...props} />
      <NpmPackages {...props} />
      <Sonar {...props} />
    </div>
  );
};
