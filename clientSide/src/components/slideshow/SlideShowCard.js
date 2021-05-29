import 'react-slideshow-image/dist/styles.css';
import '../../css/slideshow.css'
const SlideShowCard =  (props)=>{
    return(
        <div className="each-fade">
            <div>
                <img src={props.imgSrc} alt={props.name}/>
            </div>
            <p>
                {props.description}
            </p>
        </div>
    )

}

export default SlideShowCard;