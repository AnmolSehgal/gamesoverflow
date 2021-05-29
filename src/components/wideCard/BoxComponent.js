import WideCard from './WideCard';
import React from 'react';


const BoxComponent = (props) => {
	return (
			<div style={{flex: 'auto', padding: '20px'}}><WideCard heading={props.name} imgSrc={props.img} about={props.disc} price={props.price} /></div>
	);
}

export default BoxComponent;