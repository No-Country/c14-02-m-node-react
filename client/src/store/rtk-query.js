
import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiQueries = createApi({

    baseQuery : fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/"
        // en el deploy cambiar la base url al deploy del back.
    }),
    endpoints: (builder)=>({
        getAllPublications: builder.query({
            query: ()=> "publication"
        }),
        getPublicationById: builder.query({
            query: (id) => `publication/byId/${id}`
        }),
        postPublication: builder.mutation({
            query: (data) =>({
                url:"publication",
                method: "post",
                body: data,
            })
        })
    }),
    //agregar otros endpoints

});



export const {
    useGetAllPublicationsQuery,
    useGetPublicationByIdQuery,
    usePostPublicationMutation,
} = apiQueries;