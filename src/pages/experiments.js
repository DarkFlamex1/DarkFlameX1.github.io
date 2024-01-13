import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../components/layout';

// attempted to create the design of the projects page here: https://www.shiyunlu.com/projects/

// main page component that user lands on
const ExperimentsPage = () => {


  return(
    <Layout currPage='home'>
      <div className='bg-stone-100 flex flex-col grow justify-center items-center'>
        {/* Full name and tag line */}
        <p className='font-bold text-4xl sm:text-6xl lg:text-8xl'>vikram peddinti</p>
        <p className='font-light text-xl lg:text-4xl py-4'>
        </p>
      </div>
    </Layout>
  )
}

export default ExperimentsPage;