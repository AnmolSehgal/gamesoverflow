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
   const x = this.props.datas.filter(data=>  { return data.productPrice<200});


        return(
            <div className="slide-container">
                <Fade autoplay={this.state.autoplay}>
                {x.map(obj=>{
                        return <SlideShowCard imgSrc = {`http://localhost:8000${obj.productImage}`} description = {obj.productDescription} name={obj.productName}/>
                    })}
                </Fade>
            </div>
            );
    }
}
export  default SlideShow;