import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiQueries = createApi({

    baseQuery : fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/"
        // en el deploy cambiar la base url al deploy del back.
    }),
    endpoints: (builder)=>({ // publication queries
        getAllPublications: builder.query({
            query: ()=> ({url:"publication"})
        }),
        getPublicationById: builder.query({
            query: (id) => ({url: `publication/byId/${id}`})
        }),
        createPublication: builder.mutation({
            query: (data) =>({
                url:"publication",
                method: "post",
                body: data,
            })
        }),
        updatePublication: builder.mutation({
            query: (id, update) =>({
                url: `publication/${id}`,
                method: "put",
                body: update,
            })
        }),
        deletePublication: builder.mutation({
            query: (id)=>({
                url: `publication/${id}`,
                method: 'delete',
            })
        }),// User queries
        getUsers: builder.query({
            query: ()=> "user"
        }),
        getUser: builder.query({
            query: (email) => `user/${email}`
        }),
        createUser: builder.mutation({
            query: (newUser) =>({
                url: "user",
                method: 'post',
                body: newUser,
                headers: {}
            })
        }),
        login: builder.mutation({
            query: (login) =>({
                url: "user/login",
                method: "post",
                body: login,
                headers: {}
            })
        }),
        updateUser: builder.mutation({
            query: (data) =>({
                url: `user/${data.email}`,
                method: "put",
                body: data.update
            })
        }),//review queries
        getReviews: builder.query({
            query: ()=> ({url: "review"})
        }),
        getReview: builder.query({
            query: (id) => ({url:`review/${id}`})
        }),
        createReview: builder.mutation({
            query: (newReview) =>({
                url: "review",
                method: "post",
                body: newReview
            })
        }),
        updateReview: builder.mutation({
            query: (id, update)=>({
                url: `review/update/${id}`,
                method: "pust",
                body: update
            })
        }),// favorite queries
        getAllFavorites: builder.query({
            query: (email) => ({url: `favorite/${email}` })
        }),
        addFavorite: builder.mutation({
            query: (data) => ({
                url: "favorite",
                method: "post",
                body: data,
            })
        }),
        removeFavorite: builder.mutation({
            query: (id) => ({
                url: `favorite/${id}`,
                method: "delete",
            })
        }),
        
    }),
    
    //agregar otros endpoints

});
// implemetation headers

/* apiQueries.use((request, next)=>{
    request.headers.set('access-token', 'mi token');

    return next(request);
});
 */


export const {
    // publication queries
    useGetAllPublicationsQuery,
    useGetPublicationByIdQuery,
    useCreatePublicationMutation,
    useUpdatePublicationMutation,
    useDeletePublicationMutation,
    // user queries
    useGetUsersQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useLoginMutation,
    useUpdateUserMutation,
    // review queries
    useGetReviewQuery,
    useGetReviewsQuery,
    useCreateReviewMutation,
    useUpdateReviewMutation,
    // favorite queries
    useGetAllFavoritesQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,



} = apiQueries;