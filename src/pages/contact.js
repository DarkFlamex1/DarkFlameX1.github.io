import * as React from 'react';

import Layout from '../components/layout';


// main page component that user lands on
const ContactPage = () => {
  return(
    <Layout>
      <div className='bg-stone-100 flex flex-col grow justify-center items-center'>
        {/* Full name and tag line */}
        <p className='font-bold text-4xl sm:text-6xl lg:text-8xl'>vikram peddinti</p>
        <p className='font-light text-xl lg:text-4xl py-4'>gamedev.</p>
      </div>
    </Layout>
  )
}

export default ContactPage;