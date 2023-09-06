import { createApi } from "@reduxjs/toolkit/query/react";
import { IFamilyRes } from "../../../interface/Employee.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const EmployeeAPI = createApi({
  reducerPath: "EmployeeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["EmployeeApi"],
  endpoints: (builder) => ({
    searchEmployee: builder.query({
      query: (status, keyword = "") =>
        `/employee/search?pageIndex=1&pageSize=200${
          keyword && `&keyword=${keyword}`
        }&listStatus=${status}`,
    }),
    getEmployeeById: builder.query<IFamilyRes, string | number>({
      query: (id) => `/employee/${id}`,
    }),

    createEmployee: builder.mutation({
      query(data) {
        return {
          url: `/employee`,
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),
    updateEmployee: builder.mutation({
      query({ id, data }) {
        return {
          url: `/employee/${id}`,
          method: "PUT",
          body: data,
        };
      },
      //   invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),

    deleteFamily: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),

      //   invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),
    uploadImage: builder.mutation({
      query(data) {
        // truyen len day 1 data input file image
        // const data = new FormData()
        //   data.append('file', img)
        return {
          url: `/employee/upload-image`,
          method: "POST",
          body: data,
          headers: { "Content-Type": "multipart/form-data" },
        };
      },
    }),
    getAvata: builder.query({
      query: (img) => `/employee/upload-image/${img}`,
    }),
    getEmployeHappening: builder.query({
      query: (listStatus) => `employee/happening?listStatus=${listStatus}`,
    }),
  }),
});

export const {
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useGetAvataQuery,
  useDeleteFamilyMutation,
  useSearchEmployeeQuery,
  useUpdateEmployeeMutation,
  useUploadImageMutation,
  useGetEmployeHappeningQuery,
} = EmployeeAPI;
