import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Main from '../components/home/Main'
import Title from '../components/Title'

const Home = () => {
  const head = "This is Heading";
  return (
    
    <div>
        <Title heading={head} />
        <div>
            <HeroSection/>
        </div>

        <div>
            <Main/>
        </div>

        
      
    </div>
  )
}

export default Home
