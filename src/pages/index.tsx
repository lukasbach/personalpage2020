import React from 'react';
import { MainPage } from '../components/MainPage/MainPage';
import { ContactButtonContainer } from '../components/ContactButtons/ContactButtonContainer';
import { ContactButton } from '../components/ContactButtons/ContactButton';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <MainPage>
      { site.siteMetadata.description.split('\n').map(d => <p children={d} />) }

      <ContactButtonContainer small={true} right={true}>
        <ContactButton icon={ faGithub as any } href="https://github.com/lukasbach" title="My GitHub"/>
        <ContactButton icon={ faLinkedin as any } href="https://linkedin.com/in/lukasbach" title="LinkedIn"/>
      </ContactButtonContainer>
    </MainPage>
  );
};

export default IndexPage;
