/**
 * Layout component that provides every
 * pages layout across the site. 
 * 
 * Uses a children prop to show the page. 
 * 
 */

import * as React from 'react';
import Navbar from './navbar';

// main page component that user lands on
const Layout = ({children}) => {
  return(
    <div className='flex flex-col h-dvh w-dvw'>
      <Navbar></Navbar>
      <main className='flex h-full w-full'>{children}</main>
    </div>
  )
}

export default Layout;
