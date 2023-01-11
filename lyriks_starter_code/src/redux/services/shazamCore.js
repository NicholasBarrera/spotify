import {buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { build } from 'vite';


export const shazamCoreApi = createApi ({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Host', '2eb6eea384msh367af004d5e39e8p111377jsnd388daacae12');

            return headers;
        },

    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;