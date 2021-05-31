


import React from "react";
import MediaCard from "./Game";



const Games = ({ datas, onAdd}) => {
   console.log(datas);

  //   console.log(x);

  return (
      <div style={{display: 'grid','grid-template-columns': 'repeat(auto-fit, minmax(220px, 1fr))',
      'grid-column-gap': '2rem',
      'grid-row-gap': '5rem',  backgroundColor: '#131313'}}>
    {datas.map(data => (
        <MediaCard data={data} img={data.productImage} name={data.productName} price={data.productPrice} onAdd={onAdd} />
    ))
    }
    </div>
  );
};

export default Games;