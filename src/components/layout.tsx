/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Header } from './Header';
import "./layout.scss"
import "./fontAwesomeIconInit";

const Layout: React.FC<{
  titleScreenContent?: React.ReactNode,
  title?: boolean,
  hiddenDominant?: boolean
}> = props => {

  return (
    <div className="app-container">
      <Header
        fullscreen={!!props.titleScreenContent || props.title}
        fullscreenContent={props.titleScreenContent}
      />
      {
        !props.titleScreenContent && (
          <>
            {props.children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </>
        )
      }
    </div>
  )
}

export default Layout
