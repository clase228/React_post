
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/catalog/",
  }),
  endpoints: (builder) => ({
    GetCatalog: builder.query({
      query: () => "selection"
    }),

  }),
});


export const { useGetCatalogQuery } = catalogApi;