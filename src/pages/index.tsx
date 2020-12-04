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
      <p>
        Hello there! I'm a Web Developer from Karlsruhe, passionate about React and TypeScript, but working with all
        sorts of technologies.
      </p>

      <p>
        Currently I am studying Computer Science and finishing my Master of Science in early 2021, while working at
        LogMeIn as working student. I've worked on various personal projects, the most recent one being the feature-rich
        notebook app <a href="https://yana.js.org" target="_blank">Yana</a>.
      </p>

      <ContactButtonContainer small={true} right={true}>
        <ContactButton icon={ faGithub as any } href="https://github.com/lukasbach" title="My GitHub"/>
        <ContactButton icon={ faLinkedin as any } href="https://linkedin.com/in/lukasbach" title="LinkedIn"/>
      </ContactButtonContainer>
    </MainPage>
  );
};

export default IndexPage;
