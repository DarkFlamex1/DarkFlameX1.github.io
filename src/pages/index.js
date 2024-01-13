import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../components/layout';

const taglineArray = [
  {name:'gamedev.'},
  {name:'software engineer.'},
  {name:'monkey.'}
]



// main page component that user lands on
const IndexPage = () => {
  
  // Loops through for tagline
  const [currentIndex, setCurrentIndex] = useState(0);
  React.useEffect(() => {
    const id = setTimeout(
      () => setCurrentIndex((currentIndex + 1) % taglineArray.length),
      1500
    );
    return () => {
      clearInterval(id); // removes React warning when gets unmounted
    };
  }, [currentIndex]);


  return(
    <Layout currPage='home'>
      <div className='bg-stone-100 flex flex-col grow justify-center items-center'>
        {/* Full name and tag line */}
        <p className='font-bold text-4xl sm:text-6xl lg:text-8xl'>vikram peddinti</p>
        <p className='font-light text-xl lg:text-4xl py-4'>
          {
            taglineArray[currentIndex].name
          }

        </p>
      </div>
    </Layout>
  )
}

export default IndexPage;