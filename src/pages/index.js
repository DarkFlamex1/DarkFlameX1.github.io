import * as React from 'react';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import SLink from '../components/SLink';

// main page component that user lands on
const IndexPage = () => {
  return(
    <Layout>
      <div className='bg-green-500 flex grow justify-center items-center'>
        {/* Full name and tag line */}
        <p className='font-bold text-4xl lg:text-8xl'>Vikram Peddinti</p>
      </div>
    </Layout>
  )
}

export default IndexPage;