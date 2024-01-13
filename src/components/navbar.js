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
      <nav className='bg-stone-100 py-5'>
        <div className='flex justify-center items-center'>
          {/* Add each item in the flex container */}
          <div className='flex-none font-semibold text-lg md:text-xl px-6'>
            <SLink>home</SLink> | <SLink>about</SLink> | <SLink>projects</SLink> | <SLink>contact</SLink></div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar;
