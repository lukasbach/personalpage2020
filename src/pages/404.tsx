import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { MainPage } from '../components/MainPage/MainPage';
import { ContactButtonContainer } from '../components/ContactButtons/ContactButtonContainer';
import { ContactButton } from '../components/ContactButtons/ContactButton';
import { faGithub, faLastfm, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => (
  <MainPage>
    <p>404 - Content not found</p>
    <ContactButtonContainer small={false}>
      <ContactButton icon={faHome as any} href="/">Back to Home</ContactButton>
    </ContactButtonContainer>
  </MainPage>
)

export default NotFoundPage
