/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.scss"
import "../fontAwesomeIconInit";
import { Footer } from '../Footer';

const Layout: React.FC<{
  standalone?: boolean,
  className?: string,
  topBorder?: boolean,
}> = props => {

  return (
    <>
      <div className={'bg-container' + (props.topBorder ? ' top-border' : '')} />
      <main className={`${props.standalone && 'standalone'} ${props.className}`} role="main">
        { props.children }
      </main>
    </>
  )
}

export default Layout
