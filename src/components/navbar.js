/**
 * Navbar component that provides site navigation to pages using a graphql query.
 */

import * as React from 'react';
import { Link } from 'gatsby';

// Inspired by https://github.com/64bitpandas/bencuan.me/blob/main/src/components/header.js
// Used the little hack: (i + 1 !== row.length)
// Store a name which is displayed on the navbar along with the url to link to
const barLinks = [
  {
    name: "home",
    url: "/"
  },
  {
    name: "about",
    url: "/about"
  },
  {
    name: "experiments",
    url: "/experiments"
  },
  {
    name: "contact",
    url: "/contact"
  }
]

// main page component that user lands on
const Navbar = ({currPage}) => {
  return(
    <header>
      {/* Use a flex bar
      */}
      <nav className='py-5'>
        <div className='flex justify-center items-center'>
          {/* Add each item in the flex container */}

          <div className='flex-none font-semibold text-lg md:text-xl px-6'>
          {
          barLinks.map((link, i, row) => (
                <span key={link.name}>
                  <Link className={currPage == link.name ? 'font-bold underline' : 'hover:underline hover:text-blue-600'} to={link.url}>{link.name}</Link>
                  {(i + 1 !== row.length) && (<span>&nbsp;|&nbsp;</span>)}
                </span>
          ))
          }
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar;
