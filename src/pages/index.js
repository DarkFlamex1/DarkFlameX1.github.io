import * as React from 'react';

import Layout from '../components/layout';

// main page component that user lands on
const IndexPage = () => {
  return(
    <Layout>
      <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">vikram peddinti</div>
        <div class="text-base max-w-prose">
          <p>Hi there! My name is Vikram Peddinti & I'm currently an SDET @ Bungie.</p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage;