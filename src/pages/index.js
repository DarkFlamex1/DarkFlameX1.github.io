import * as React from 'react';

import Layout from '../components/layout';
import SLink from '../components/SLink';

// main page component that user lands on
const IndexPage = () => {
  return(
    <Layout>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">vikram peddinti</div>
        <div className="text-base max-w-prose">
          <p>Hi there! My name is Vikram Peddinti & I'm currently an SDET @ Bungie. <SLink>Testing</SLink> Now here's more information and then another </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage;