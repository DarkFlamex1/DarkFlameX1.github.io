import * as React from 'react';

import Layout from '../components/layout';

// main page component that user lands on
const ContactPage = () => {
  return(
    <Layout currPage='contact'>
      <div className='bg-stone-100 flex flex-col grow px-6 sm:px-12 md:px-18 lg:px-30 xl:px-60 items-center'>
        {/* Contact page with github and other
         media */}
        
        <p className='font-bold text-6xl py-4'>contact</p>
        <p className='font-bold text-2xl '>reach out!</p>
        
        <p className='font-semibold text-2xl py-1'>email: contact@vikramp.me</p>
        <p className='font-semibold text-2xl py-1'>linkedin: linkedin.com/in/vpeddinti</p>
        <p className='font-semibold text-2xl py-1'>itch.io: linkedin.com/in/vpeddinti</p>
        <p className='font-semibold text-2xl py-1'>linkedin: linkedin.com/in/vpeddinti</p>
      </div>
    </Layout>
  )
}

export default ContactPage;