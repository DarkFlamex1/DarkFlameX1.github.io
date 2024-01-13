import * as React from 'react';
import Layout from '../components/layout';
// Index Page component
const AboutPage = () => {
  return (
    <Layout>
      <div className='bg-stone-100 flex flex-col grow px-6 sm:px-12 md:px-18 lg:px-30 xl:px-60'>
        {/* Full name and tag line */}
        <p className='font-bold text-6xl'>about me</p>

        <div className='text-2xl py-4'>

          <p className='py-2'>
            Welcome to my  lil website!
          </p>

          <p className='py-2'>I’m Vikram (he/him), currently an SDET @ Bungie working over on Marathon. I've previously built a wide array of gamedev related projects focused on networking.
          </p>

          <p className='py-2'>
            Outside of work you can find me trail running, trying to replicate my restaurant foods at home, or just wandering somewhere out in the hills with my wife & my dog. I love walking everywhere & truly love food so please send recs :) If you ever want to connect feel free to reach out to me!
          </p>

        </div>

      </div>
    </Layout>


  )
}

export default AboutPage;