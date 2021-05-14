import React from 'react';
import ReactDom from 'react-dom';
import Details from '../../../src/objects/details.json';
import BoxComponent from './BoxComponent';

const WideComponent = () => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: '100%', maxWidth: 'auto', backgroundColor: '#131313'}}>
			{
				Details.map(detail => (
					<BoxComponent img={detail.img} name={detail.name} disc={detail.disc} price={detail.price}/>
				))
		  }
</div>
  );
}

export default WideComponent;
