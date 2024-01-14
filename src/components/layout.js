/**
 * Layout component that provides every
 * pages layout across the site. 
 * 
 * Uses a children prop to show the page. 
 * 
 */

import * as React from 'react';
import Navbar from './navbar';
import { Link } from 'gatsby';

// main page component that user lands on
const Layout = ({currPage, children}) => {
  return(
    <div className='flex flex-col h-dvh w-dvw bg-stone-100'>
      <Navbar currPage={currPage}></Navbar>
      <main className='flex h-full w-full'>{children}</main>
      <footer className='font-light flex px-5 my-10'>
        <span>2024 |&nbsp;</span>
        <a className='hover:underline' href="https://github.com/DarkFlamex1/personal-portfolio/tree/dev-2024/">source</a>
      </footer>
    </div>
  )
}

export default Layout;
