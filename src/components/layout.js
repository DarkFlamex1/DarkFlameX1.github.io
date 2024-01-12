/**
 * Layout component that provides every
 * pages layout across the site. 
 * 
 * Uses a children prop to show the page. 
 * 
 */

import * as React from 'react';

// main page component that user lands on
const Layout = ({children}) => {
  return(
    <main>{children}</main>
  )
}

export default Layout;
