/**
 * Navbar component that provides site navigation to pages using a graphql query.
 */

import * as React from 'react';
import SLink from './SLink';

// main page component that user lands on
const Navbar = () => {
  return(
    <header>
      {/* Use a flex bar
      */}
      <nav className='bg-slate-400 py-10'>
        <div className='flex justify-between items-center'>
          {/* Add each item in the flex container */}
          <div className='flex-none'><SLink>Home</SLink> | <SLink>About</SLink> | <SLink>Projects</SLink> | <SLink>Blog</SLink></div>
          <div className='flex-1'>02</div>
          <div className='flex-1'>02</div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar;
