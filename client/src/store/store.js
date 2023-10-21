// redux toolkit


import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {reducer} from './reducer';
import { apiQueries } from './rtk-query';



export const store = configureStore({
    reducer:{
        [apiQueries.reducerPath]: apiQueries.reducer,
        main: reducer,
    },
    middleware: (getDefaultMiddleware)=>
            getDefaultMiddleware().concat(apiQueries.middleware),
});


setupListeners(store.dispatch);