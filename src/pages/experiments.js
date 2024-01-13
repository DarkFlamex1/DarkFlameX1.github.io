import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../components/layout';

// attempted to create the design of the projects page here: https://www.shiyunlu.com/projects/

// This component is a reuseable component for each experiment
// contains data about the experiment along with a link to the official sites
const Experiment = ({projectDate, title, techTags, description}) => {
    return(
        <div className='w-full p-4 border-gray-200 divide-y divide-dashed divide-zinc-600 hover:bg-sky-50 hover:border group'>
            {/* Div that contains the flex sideways within the card */}
            <div className='flex flex-row items-end'>
                <p className='font-medium'>{projectDate}</p>
                <p className='font-semibold px-4 text-xl group-hover:font-bold'>{title}</p>
                {/* <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent text-sm mx-2 h-1/4'>tailwind</p>
                <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent text-sm h-1/4'>gatsby</p> */}
                {/* <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent text-sm'>Vercel</p> */}
            </div>

            {/* Div that contains the information and image to stack below inside the card */}
            <div className='flex flex-col'>
                <p className='max-w-xl py-1'>{description}</p>
            </div>
        </div>
    )

}


// main page component that user lands on
const ExperimentsPage = () => {


  return(
    <Layout currPage='experiments'>
      <div className='bg-stone-100 flex flex-col grow items-center'>
        <p className='font-bold text-6xl pb-6'>experiments</p>
        {/* 
        Create a grid(column stacking) that contains every project from the DB? 
        Date, Title, Tech tags, line/information, image
        
        */}
        <div className='columns-1'>
            <Experiment projectDate={'Jan 2024'} title={'vikramp.me'} description={'First iteration of this current website made with gatsbyjs & tailwindcss.'}></Experiment>
            <Experiment projectDate={'Jan 2024'} title={'yet another fps experiment'} description={'An attempt to make a singleplayer fps prototype in unity set in a dark mysterious world. Additional information can be found on itch.io or my blog.'}></Experiment>
            <Experiment projectDate={'2023'}></Experiment>
            <Experiment projectDate={'2023'}></Experiment>
        </div>

      </div>
    </Layout>
  )
}

export default ExperimentsPage;