// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("publications/fetchUsers", async () => {
	const response = await fetch("http://localhost:3000/api/user");
	const data = await response.json();
	return data;
});

const userSlice = createSlice({
	name: "users",
	initialState: {
		allUsers: [],
		currentUser: {},
		status: "idle",
		error: null,
	},
	reducers: {
		// acción para buscar por ID
		searchUserByEmail: (state, action) => {
			const emailForSearch = action.payload;
			const foundUser = state.allUsers.find(user => user.email === emailForSearch);
			state.currentUser = foundUser || {};
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.allUsers = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { searchUserByEmail } = userSlice.actions;

export default userSlice.reducer;
