import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from '../components/layout';
import { faLink} from '@fortawesome/free-solid-svg-icons';
import JSONData from "../data/experimentsData.json";

// attempted to create the design of the projects page here: https://www.shiyunlu.com/projects/

// This component is a reuseable component for each experiment
// contains data about the experiment along with a link to the official sites
const Experiment = ({projectDate, title, techTags, description, projectWebsite}) => {
    return(
      <a href={projectWebsite}>
        <div className='w-full p-4 border-gray-200 divide-y divide-dashed divide-zinc-600 hover:bg-sky-50 hover:border group'>
            {/* Div that contains the flex sideways within the card */}
            <div className='flex flex-row items-end w-full'>
                <p className='font-medium xl:text-lg'>{projectDate}</p>
                <p className='flex-1 font-semibold px-4 text-xl xl:text-2xl group-hover:font-bold group-hover:text-blue-600'>{title}</p>
                <FontAwesomeIcon icon={faLink} size="lg" className="flex py-1"/>
            </div>

            {/* Div that contains the information and image to stack below inside the card */}
            <div className='flex flex-col'>
                <p className='max-w-xl py-1 text-lg xl:text-lg'>{description}</p>
            </div>
        </div>
      </a>
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
            {JSONData.array.map((data) => (
              <Experiment projectDate={data.projectDate} projectWebsite={data.projectWebsite} title={data.title} description={data.description}></Experiment>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default ExperimentsPage;