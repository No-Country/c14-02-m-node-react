import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define una acción asincrónica para cargar las publicaciones
export const fetchPublications = createAsyncThunk("publications/fetchPublications", async (query ="") => {
	let data ={}
	const response = await fetch("https://clon-airbnb-api.onrender.com/api/publication");
	const res = await response.json();
	if (query === ""){
		 data = res.filter(publication => {
			return !publication.title.startsWith("***");
		})} else {
			data=res
		}
	return data;
});

export const updatePublication = createAsyncThunk("publications/updatePublication", async (publicationData) => {
	const url = "https://clon-airbnb-api.onrender.com/api/publication";
	const requestOptions = {
	  method: "PUT",
	  headers: {
		"Content-Type": "application/json", 
	  },
	  body: JSON.stringify(publicationData),
	};
  
	const response = await fetch(url, requestOptions);
  
	if (response.ok) {
	  return publicationData;
	} else {
	  const errorData = await response.json();
	  throw new Error(errorData.message);
	}
  });

  export const deletePublication = createAsyncThunk("publications/deletePublication", async (id) => {
	const url = `https://clon-airbnb-api.onrender.com/api/publication/${id}`;
	const requestOptions = {
	  method: "DELETE",
	  headers: {
		"Content-Type": "application/json",
	  },
	};
  
	const response = await fetch(url, requestOptions);
  console.log(response)
	if (response.ok) {
	  // El recurso se eliminó con éxito, no es necesario devolver nada.
	  return;
	} else {
	  const errorData = await response.json();
	  throw new Error(errorData.message);
	}
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
