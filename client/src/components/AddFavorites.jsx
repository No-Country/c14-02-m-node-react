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
      <ul>cd
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

// card

  // const [isFavorite, setIsFavorite] = useState(publication.favorite);

        // setIsFavorite(!isFavorite);
      // sendFavoriteStatusToServer(publication._id, !isFavorite);

        // const sendFavoriteStatusToServer = (publicationId, isFavorite) => {
  //   const apiUrl = `https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/favorite/${publicationId}`;
  //   const requestData = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ isFavorite }),
  //   };

  //   fetch(apiUrl, requestData)
  //     .then((response) => {
  //       if (response.ok) {
  //         // La llamada al servidor fue exitosa
  //         console.log("Estado de favorito actualizado en el servidor");
  //       } else {
  //         // La llamada al servidor falló
  //         console.error("Error al actualizar el estado de favorito en el servidor");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error en la llamada al servidor:", error);
  //     });
  // };

{/* <section className="conteinerCards flex flex-wrap w-ful p-4">
        {dataCards.map((cardElement) => {
          // Filtra las tarjetas favoritas de acuerdo a la lista de favoritas
          if (favoriteCards.some((favorite) => favorite._id === cardElement.id)) {
            return <Card key={cardElement.id} cardElement={cardElement} />;
          }
          return null;
        })}
      </section> */}



// favorites page

// import React, { useState, useEffect } from "react";

        // const [favoriteCards, setFavoriteCards] = useState([]);

  // useEffect(() => {
  //   fetch('https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/favorite') // Endpoint de las tarjetas favoritas
  //     .then((response) => response.json())
  //     .then((data) => setFavoriteCards(data)) // Actualiza el estado con las tarjetas favoritas
  //     .catch((error) => console.error('Error al cargar tarjetas favoritas:', error));
  // }, []);