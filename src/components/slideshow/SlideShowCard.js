import 'react-slideshow-image/dist/styles.css';

const SlideShowCard =  (props)=>{
    return(
        <div className="each-slide">
            <div>
                <img src={props.value.imgSrc} alt={props.value.gameName}/>
            </div>
            <p>
            {props.value.description}
            </p>
        </div>
    )

}

export default SlideShowCard;