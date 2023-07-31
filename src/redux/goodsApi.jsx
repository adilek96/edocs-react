import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const linkURL = "http://app.hesabdar.az/EDOCS/hs/"; //'http://localhost:3001/'

export const goodsApi = createApi({
    //**Это название как будет отображаться в нашем общем store. */
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({baseUrl: linkURL}),
    endpoints: (build)=>({
        getGoods: build.query({
            //**Это дополнение к базовому адресу baseUrl:'http://localhost:3001/'*/
            //**limit - это количество запрашиваемых данных. */
            //query: (limit = '') =>`products`,
            query: (limit = '') =>`products?${limit && `_limit=${limit}`}`,
        })
    })
});

export const {useGetGoodsQuery} = goodsApi;
