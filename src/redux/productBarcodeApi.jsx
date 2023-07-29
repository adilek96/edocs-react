import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productBarcodeApi = createApi({
    //**Это название как будет отображаться в нашем общем store. */
    reducerPath: 'productBarcodeApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    endpoints: (build)=>({
        getProductBarcode: build.query({
            //**Это дополнение к базовому адресу baseUrl:'http://localhost:3001/'*/
            //**limit - это количество запрашиваемых данных. */
            query: (limit = '') =>`productBarCode?${limit && `_limit=${limit}`}`, 
            query2: (productName = '') =>`productBarCode?${productName && `_productName=${productName}`}`,
        })
    })
});

export const {useGetProductBarcodeQuery} = productBarcodeApi;
