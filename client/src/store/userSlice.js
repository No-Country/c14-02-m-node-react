// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation } from './rtk-query';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        useGetUsersQuery.matchPending,
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        useGetUsersQuery.matchFulfilled,
        (state, action) => {
          state.status = 'succeeded';
          state.users = action.payload;
        }
      )
      .addMatcher(
        useGetUsersQuery.matchRejected,
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      )
      .addMatcher(
        useCreateUserMutation.matchFulfilled,
        (state, action) => {
          // Actualiza el estado después de crear un usuario
          state.users.push(action.payload);
        }
      )
      .addMatcher(
        useUpdateUserMutation.matchFulfilled,
        (state, action) => {
          // Actualiza el estado después de actualizar un usuario
          const updatedUser = action.payload;
          const index = state.users.findIndex((u) => u.id === updatedUser.id);
          if (index !== -1) {
            state.users[index] = updatedUser;
          }
        }
      );
  },
});

export default userSlice.reducer;
