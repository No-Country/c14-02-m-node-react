import { createReducer } from "@reduxjs/toolkit";
//importar acciones
/* import {
        getPublications,
} from './actions' */


const initialState = {
    token: '',
    userLog: {},
    allPublications: [],
    publicationDetail: {},
    pagination:{},

}

export const reducer = createReducer( initialState, (builder)=>{

    /*builder.addCase(exampeAction,()=>{
        //modifican el estado
    })*/

});