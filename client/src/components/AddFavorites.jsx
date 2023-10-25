// import React, { useState } from "react";
// import { Card } from "./Card";
// import { FavoritesPages } from "../pages/FavoritesPages";

// function AddFavoritos() {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (isHeartRed) => {
//     if (isHeartRed) {
//       setFavorites((prevFavorites) => [...prevFavorites]);
//     } else {
//       setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite));
//     }
//   };

//   return (
//     <div>
//       <div>
//         <Card name="card 1" addToFavorites={addToFavorites} />
//         <Card name="card 2" addToFavorites={addToFavorites} />
//       </div>
//       <FavoritesPages favorites={favorites} />
//     </div>
//   );
// }

// export default AddFavoritos;

import React, { useState } from 'react';

function addFavorites() {
  const [cards, setCards] = useState([
    { id: 1, name: 'Card 1', favorite: false },
    { id: 2, name: 'Card 2', favorite: false },
    { id: 3, name: 'Card 3', favorite: false },
  ]);

  const toggleFavorite = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, favorite: !card.favorite };
      }
      return card;
    });
    setCards(newCards);
  };

  const favoriteCards = cards.filter((card) => card.favorite);

  return (
    <div>
      <h1>List of Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            {card.name}{' '}
            <span
              onClick={() => toggleFavorite(card.id)}
              style={{
                cursor: 'pointer',
                color: card.favorite ? 'red' : 'gray',
              }}
            >
              &#10084; {/* Heart */}
            </span>
          </li>
        ))}
      </ul>

      <h2>Favorite Cards</h2>
      <ul>
        {favoriteCards.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default addFavorites;