import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetAllFavoritesQuery } from "./rtk-query";

export const loadFavorites = createAsyncThunk("favorites/loadFavorites", async email => {
	const response = await fetch(`http://localhost:3000/api/favorite/${email}`);
	const data = await response.json();
	return data; // Asumiendo que los datos están en response.data
});

const favoriteSlice = createSlice({
	name: "favorites",
	initialState: {
		allFavorites: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadFavorites.pending, state => {
				state.status = "loading";
			})
			.addCase(loadFavorites.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allFavorites = action.payload;
			})
			.addCase(loadFavorites.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
	// ...
});

export default favoriteSlice.reducer;
