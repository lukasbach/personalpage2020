import React, { useEffect } from 'react';
import { MainPage } from '../components/MainPage/MainPage';
import { ContactButtonContainer } from '../components/ContactButtons/ContactButtonContainer';
import { ContactButton } from '../components/ContactButtons/ContactButton';
import { faGithub, faGithubAlt, faLastfm, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  useEffect(() => {
    const decryptCode = `function UnCryptMailto(s){var n = 0;var r = "";for( var i = 0; i < s.length; i++){n = s.charCodeAt( i );if( n >= 8364 ){n = 128;}r += String.fromCharCode( n - 1 );}return r;}function linkTo_UnCryptMailto( s ){location.href=UnCryptMailto( s );}`;
    eval(decryptCode);

    function UnCryptMailto(s) {
      let n = 0;
      let r = "";
      for (let i = 0; i < s.length; i++) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n - 1);
      }
      return r;
    }

    function linkTo_UnCryptMailto(s) {
      location.href=UnCryptMailto(s);
    }

    (window as any).linkTo_UnCryptMailto = linkTo_UnCryptMailto;
  });

  return (
    <MainPage>
      <ContactButtonContainer small={false}>
        <ContactButton icon={faGithub as any} href="https://github.com/lukasbach">GitHub</ContactButton>
        <ContactButton icon={faTwitter as any} href="https://twitter.com/lukmbach">Twitter</ContactButton>
        <ContactButton icon={faLinkedin as any} href="https://linkedin.com/in/lukasbach">LinkedIn</ContactButton>
        <ContactButton icon={faLastfm as any} href="https://www.last.fm/de/user/questcube">LastFM</ContactButton>
        <ContactButton icon={faEnvelope as any} href="javascript:linkTo_UnCryptMailto('nbjmup;mcbdiApvumppl/ef');" noNewTab={true}>Mail Me</ContactButton>
      </ContactButtonContainer>
    </MainPage>
  );
}

export default ContactPage;
