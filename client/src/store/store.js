// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiQueries } from "./rtk-query";

import publicationReducer from "./publicationSlice";
import userReducer from "./userSlice"; // Ejemplo de otro slice para usuarios
import reviewReducer from "./reviewSlice"; // Ejemplo de otro slice para revisiones
import favoriteReducer from "./favoriteSlice"; // Ejemplo de otro slice para favoritos

export const store = configureStore({
	reducer: {
		[apiQueries.reducerPath]: apiQueries.reducer,
		publications: publicationReducer,
		// users: userReducer, // Agrega otros slices aquí
		// reviews: reviewReducer,
		favorites: favoriteReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiQueries.middleware),
});

setupListeners(store.dispatch);
