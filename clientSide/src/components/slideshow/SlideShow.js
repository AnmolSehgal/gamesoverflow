import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideShowCard from './SlideShowCard';
import  '../../css/slideshow.css';
const slideShowObj = [
    {imgSrc:"/images/cyberpunk_2077_4k-wallpaper-1440x900.jpeg",description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",gameName:'sample'},
    {imgSrc:"/images/callofduty.jpeg",description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",gameName:'sample'},
    {imgSrc:"/images/cyberpunk_2077_4k-wallpaper-1440x900.jpeg",description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",gameName:'sample'},
    {imgSrc:"/images/cyberpunk_2077_4k-wallpaper-1440x900.jpeg",description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",gameName:'sample'},
                    ]

class SlideShow extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                autoplay: true
            }
        }
/* { */
    
    render(){
        return(
            <div className="slide-container">
                <Fade autoplay={this.state.autoplay}>
                {slideShowObj.map(obj=>{
                        return <SlideShowCard imgSrc = {obj.imgSrc} description = {obj.description} name={obj.gameName}/>
                    })}
                </Fade>
            </div>
            );
    }
}
export  default SlideShow;