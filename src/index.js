import React from 'react';
import ReactDom from 'react-dom';
import SlideShow from './components/slideshow/SlideShow'
const App = ()=>{
    return <div>
        <SlideShow/>
    </div>
}
ReactDom.render(<App/>, document.getElementById("root"));