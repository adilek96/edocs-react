import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
    //**Это название как будет отображаться в нашем общем store. */
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build)=>({
        getGoods: build.query({
            //**Это дополнение к базовому адресу baseUrl:'http://localhost:3001/'*/
            //**limit - это количество запрашиваемых данных. */
            query: (limit = '') =>`goods?${limit && `_limit=${limit}`}`,
        })
    })
});

export const {useGetGoodsQuery} = goodsApi;
