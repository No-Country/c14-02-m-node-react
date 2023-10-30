import { createReducer } from "@reduxjs/toolkit";
//importar acciones
import { getPublications, loadPublicationDetail } from "./actions";

const initialState = {
	token: "",
	userLog: {},
	allPublications: [],
	publicationDetail: {},
	pagination: {},
};

export const reducer = createReducer(initialState, builder => {
	/*builder.addCase(exampeAction,()=>{
        //modifican el estado
    })*/
	builder.addCase(loadPublicationDetail, (state, { payload }) => {
		state.publicationDetail = payload;
	});
});
