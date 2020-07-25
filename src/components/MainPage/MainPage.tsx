import * as React from 'react';
import { FloatingPattern } from '../Pattern/FloatingPattern';
import { PatternName } from '../Pattern/PatternName';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mainpage.scss';
import { Link } from 'gatsby';
import Layout from '../Layout/layout';
import { Footer } from '../Footer';
import { PaddedContent } from '../Layout/PaddedContent';

export const MainPage: React.FC<{}> = props => {

  return (
    <Layout standalone={true} className="mainpage-container footer-container">
      <header>
        <FloatingPattern pattern={PatternName.Floor} width={'100%'} height={80} top={15} left={-15} />
        <h1>lukas<span>bach</span></h1>
        <main children={props.children} />
      </header>
      <nav>
        <Link to="/projects">
          <button>
            Projects
          </button>
        </Link>
        <Link to="/archive">
          <button>
            Misc
          </button>
        </Link>
        <Link to="/edu">
          <button>
            Educational
          </button>
        </Link>
        <Link to="/contact">
          <button>
            Follow Me
          </button>
        </Link>
      </nav>
      <Footer />
    </Layout>
  )
}
