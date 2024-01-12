/**
 * Styled underlined link which heads over to a new place
 */

import * as React from 'react';

// main page component that user lands on
const SLink = ({children}) => {
  return(
    <a className="underline hover:underline-offset-4">{children}</a>
  )
}

export default SLink;
