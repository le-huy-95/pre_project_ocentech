import { createApi } from "@reduxjs/toolkit/query/react";
import { IFamily, IFamilyRes } from "../../../interface/Family.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const FamilyApi = createApi({
  reducerPath: "Family",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Family"],
  endpoints: (builder) => ({
    // get one

    getFamilyByemployeeId: builder.query<IFamilyRes, string | number>({
      query: (id) => `/employee-family?employeeId=${id}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({ type: "Family" as const, id })),
            { type: "Family" as const, id: "FamilyLIST" },
          ];
          return final;
        }
        return [{ type: "Family", id: "FamilyLIST" }];
      },
    }),
    // get by id employee family
    getFamilyByemployee_family: builder.query<IFamilyRes, string | number>({
      query: (id) => `/employee-family/${id}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({ type: "Family" as const, id })),
            { type: "Family" as const, id: "FamilyLIST" },
          ];
          return final;
        }
        return [{ type: "Family", id: "FamilyLIST" }];
      },
    }),
    createFamily: builder.mutation<
      void,
      { id: string; data: Omit<IFamily, "id">[] }
    >({
      query({ id, data }) {
        return {
          url: `/employee-family?employeeId=${id}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),
    updateFamily: builder.mutation<
      void,
      { id: string; data: Omit<IFamily, "employeeId" | "id"> }
    >({
      query({ id, data }) {
        return {
          url: `/employee-family/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),

    deleteFamily: builder.mutation({
      query: (id) => ({
        url: `/employee-family/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: () => [{ type: "Family", id: "FamilyLIST" }],
    }),
  }),
});

export const {
  useCreateFamilyMutation,
  useDeleteFamilyMutation,
  useGetFamilyByemployeeIdQuery,
  useGetFamilyByemployee_familyQuery,
  useUpdateFamilyMutation,
} = FamilyApi;
