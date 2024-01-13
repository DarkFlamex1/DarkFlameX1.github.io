import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../components/layout';

// attempted to create the design of the projects page here: https://www.shiyunlu.com/projects/

const Experiment = ({projectDate, title, techTags, description}) => {

    

    return(
        <div className='w-full p-6 border-gray-200 divide-y divide-dashed divide-zinc-600'>
            {/* Div that contains the flex sideways within the card */}
            <div className='flex flex-row'>
                <p className='font-medium py-2'>{projectDate}</p>
                <p className='font-bold px-6 text-2xl'>{title}</p>
                {/* <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent text-sm'>Vercel</p> */}
            </div>

            {/* Div that contains the information and image to stack below inside the card */}
            <div className='flex flex-col'>
                <p className=''>{description}</p>
                <p className=''>Project Image Here</p>
            </div>
        </div>
    )

}


// main page component that user lands on
const ExperimentsPage = () => {


  return(
    <Layout currPage='home'>
      <div className='bg-stone-100 flex flex-col grow items-center'>
        <p className='font-bold text-6xl'>experiments</p>
        {/* 
        Create a grid(column stacking) that contains every project from the DB? 
        Date, Title, Tech tags, line/information, image
        
        */}
        <div className='columns-1'>
            <Experiment projectDate={'2023'} title={'Personal Portfolio'} description={'This is my new description. I made this portfolio in order to learn a bit of tailwind.'}></Experiment>
            <Experiment projectDate={'2023'}></Experiment>
            <Experiment projectDate={'2023'}></Experiment>
            <Experiment projectDate={'2023'}></Experiment>
        </div>

      </div>
    </Layout>
  )
}

export default ExperimentsPage;