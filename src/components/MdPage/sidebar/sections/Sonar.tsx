import * as React from 'react';
import { MdPageFrontmatter } from '../../MdPage';
import { SidebarInfoSection } from '../../SidebarInfoSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Sonar: React.FC<MdPageFrontmatter> = props => {
  if (!props.sonar) {
    return null;
  }

  const langDistribution = props.sonar.measures.find(s => s.metric === 'ncloc_language_distribution').value
    .split(';').map(v => v.split('='));

  return (
    <>
      <h3>Sonar</h3>
      <SidebarInfoSection
        title="Total Lines" href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=lines`}
        metainfo={props.sonar.measures.find(s => s.metric === 'lines').value}
      />
      <SidebarInfoSection
        title="Lines of Code" href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=ncloc`}
        metainfo={props.sonar.measures.find(s => s.metric === 'ncloc').value}
      />
      <SidebarInfoSection
        title="File count" href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=files`}
        metainfo={props.sonar.measures.find(s => s.metric === 'files').value}
      />
      <SidebarInfoSection
        title="Classes count" href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=classes`}
        metainfo={props.sonar.measures.find(s => s.metric === 'classes').value}
      />
      <SidebarInfoSection
        title="Functions count" href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=functions`}
        metainfo={props.sonar.measures.find(s => s.metric === 'functions').value}
      />
      {
        langDistribution.sort((a, b) => parseInt(b[1]) - parseInt(a[1])).map(lang => (
          <SidebarInfoSection
            title={`${lang[0].toUpperCase()} Code Lines`} metainfo={lang[1]}
            href={`https://sonarcloud.io/component_measures?id=${props.sonar.key}&metric=ncloc`}
          />
        ))
      }
      <a href={`https://sonarcloud.io/dashboard?id=${props.sonar.key}`} target="_blank" className="button">
        <FontAwesomeIcon icon="external-link-alt" /> Open SonarCloud Analysis
      </a>
    </>
  );
};
