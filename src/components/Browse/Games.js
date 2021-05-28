import React from "react";
import MediaCard from "./Game";



const Games = ({ products, onAdd}) => {
  return (
      <div style={{display: 'grid','grid-template-columns': 'repeat(auto-fit, minmax(220px, 1fr))',
      'grid-column-gap': '2rem',
      'grid-row-gap': '5rem',  backgroundColor: '#131313'}}>
    {products.map(data => (
        <MediaCard data={data} img={data.img} name={data.name} price={data.price} onAdd={onAdd} />
    ))
    }
    </div>
  );
};

export default Games;



{/* 
// {popular.map((game) => (
//     <Game
//       name={game.name}
//       released={game.released}
//       id={game.id}
//       image={game.background_image}
//       key={game.id}
//     />
//   ))} */}


























