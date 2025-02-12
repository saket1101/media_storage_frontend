import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_Url } from "../../constant/urls";

const baseQuery = fetchBaseQuery({
  baseUrl: Backend_Url,
  credentials: "include",
  withCredentials: "true",
});

export const apistore = createApi({
  baseQuery,
  tagTypes: ["Client"],
  endpoints: (builder) => ({}),
});
