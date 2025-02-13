import { apistore } from "./apistore";
export const MediaApi = apistore.injectEndpoints({
  endpoints: (builder) => ({
    reducerPath: "MediaApi",
    upload: builder.mutation({
      query: (data) => ({
        url: `/media/upload`,
        method: "POST",
        body: data,
      }),
    }),
    allfiles: builder.query({
      query: (type) => ({
        url: `/media/allfiles?type=${type}`,
        method: "GET",
      }),
    }),
    deletefiles: builder.mutation({
      query: (id) => ({
        url: `/media/delete/${id}`,
        method: "Delete",
      }),
    }),
  }),
});

export const { useUploadMutation,useAllfilesQuery,useDeletefilesMutation } = MediaApi;
