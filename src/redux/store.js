import { configureStore } from "@reduxjs/toolkit";
import { fetchData } from "./fetch/fetchData";
import { Query } from "./fetch/query";
import { fetchStoreData } from "./storeFetch/storeFetch";

export const store = configureStore({
  reducer: {
    data: fetchData.reducer,
    storeData: fetchStoreData.reducer,
    query: Query.reducer
  }
})