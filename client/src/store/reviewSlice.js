// reviewSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useGetReviewsQuery, useCreateReviewMutation, useUpdateReviewMutation } from './rtk-query';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        useGetReviewsQuery.matchPending,
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        useGetReviewsQuery.matchFulfilled,
        (state, action) => {
          state.status = 'succeeded';
          state.reviews = action.payload;
        }
      )
      .addMatcher(
        useGetReviewsQuery.matchRejected,
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      )
      .addMatcher(
        useCreateReviewMutation.matchFulfilled,
        (state, action) => {
          // Actualiza el estado después de crear una revisión
          state.reviews.push(action.payload);
        }
      )
      .addMatcher(
        useUpdateReviewMutation.matchFulfilled,
        (state, action) => {
          // Actualiza el estado después de actualizar una revisión
          const updatedReview = action.payload;
          const index = state.reviews.findIndex((r) => r.id === updatedReview.id);
          if (index !== -1) {
            state.reviews[index] = updatedReview;
          }
        }
      );
  },
});

export default reviewSlice.reducer;
