import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const linkURL = "http://localhost:3001/"; //"http://app.hesabdar.az/EDOCS/hs/";

export const stocksApi = createApi({
  //**Это название как будет отображаться в нашем общем store. */
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({ baseUrl: linkURL }),
  endpoints: (build) => ({
    getStocks: build.query({
      //**Это дополнение к базовому адресу baseUrl:'http://localhost:3001/'*/
      //**limit - это количество запрашиваемых данных. */
      //query: (limit = '') =>`products`,
      query: (limit = "") => `stocks?${limit && `_limit=${limit}`}`,
    }),

    updateStocks: build.mutation({
      query: (data) => ({
        url: `stocks/${data.id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStocksQuery,

  useUpdateStocksMutation,
} = stocksApi;
