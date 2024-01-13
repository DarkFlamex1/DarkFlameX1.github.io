import * as React from 'react';

import { Link } from 'gatsby-link';
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
        
        <p className='text-2xl py-1'>email: {<Link className='hover:underline' to={"mailto:contact@vikramp.me"}>contact@vikramp.me</Link>}</p>
        <p className='text-2xl py-1'>linkedin: {<Link className='hover:underline' to={"https://linkedin.com/in/vpeddinti"}>linkedin.com/in/vpeddinti</Link>}</p>
      </div>
    </Layout>
  )
}

export default ContactPage;