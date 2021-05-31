import React from 'react';
//components
import SlideShow from './components/slideshow/SlideShow';
import WideComponent from '../src/components/wideCard/WideComponent';


import LaunchCard from './components/cards/launchCard'


const Home = ({ datas })=>{
        

    return ( <div>        
        <SlideShow datas={datas}/>       
      <WideComponent />
      <LaunchCard />
    </div>
    )
}

export default Home;