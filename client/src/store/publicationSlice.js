import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define una acción asincrónica para cargar las publicaciones
export const fetchPublications = createAsyncThunk("publications/fetchPublications", async () => {
	const response = await fetch("http://localhost:3000/api/publication");
	const data = await response.json();
	return data;
});

const publicationSlice = createSlice({
	name: "publications",
	initialState: {
		allPublications: [],
		filteredPublications: [],
		currentPublication: {},
		status: "idle",
		error: null,
	},
	reducers: {
		// acción para buscar por ID
		searchPublicationById: (state, action) => {
			const idForSearch = action.payload;
			const foundPublication = state.allPublications.find(
				publication => publication._id === idForSearch
			);
			state.currentPublication = foundPublication ? [foundPublication] : [];
		},

		// acción para filtrar publicaciones por título
		filterPublicationsByTitle: (state, action) => {
			const titleToFilter = action.payload.toLowerCase();
			state.filteredPublications = state.allPublications.filter(publication => {
				// Filtra las publicaciones cuyo título coincida con titleToFilter
				return publication.title.toLowerCase().includes(titleToFilter);
			});
		},

		filterNav: (state, action) => {
			const filtro = action.payload;

			if (filtro == "") {
				state.filteredPublications = [...state.allPublications];
			} else {
				state.filteredPublications = state.allPublications.filter(publication => {
					return publication.type.includes(filtro);
				});
			}
		},

		filterPublicationsByLocation: (state, action) => {
			const locationToFilter = action.payload.toLowerCase();
			state.filteredPublications = state.allPublications.filter(publication => {
				// Filtra las publicaciones cuya locacion coincida con locationToFilter
				return publication.location.toLowerCase().includes(locationToFilter);
			});
		},
		filterPublicationsByPrice: (state, action) => {
			const { price1Filter, price2Filter } = action.payload;
			state.filteredPublications = state.allPublications.filter(publication => {
				// Filtra las publicaciones cuyo precio este entre price1 y price2
				const publicationPrice = parseFloat(publication.price);
				console.log(publicationPrice);
				return publicationPrice >= price1Filter && publicationPrice <= price2Filter;
			});
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPublications.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchPublications.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allPublications = action.payload;
				state.filteredPublications = [...state.allPublications];
			})
			.addCase(fetchPublications.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const {
	filterPublicationsByTitle,
	filterPublicationsByLocation,
	filterPublicationsByPrice,
	searchPublicationById,
	filterNav,
} = publicationSlice.actions;

export default publicationSlice.reducer;
