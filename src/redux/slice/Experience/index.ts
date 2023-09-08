import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IExperience,
  IExperienceRes,
} from "../../../interface/Experiece.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const ExperieceAPi = createApi({
  reducerPath: "ExperieceAPi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ExperieceAPi"],
  endpoints: (builder) => ({
    getExperieceById: builder.query<IExperienceRes, string | number>({
      query: (id) => "/experience" + id,
    }),
    // get by employee id
    getExperieceByemployeeId: builder.query<IExperienceRes, string | number>({
      query: (id) => "/experience" + id,
    }),
    createExperiece: builder.mutation<
      IExperienceRes,
      { data: Omit<IExperience, "id">; employeeId: string | number }
    >({
      query: ({ data, employeeId }) => ({
        url: `/experience?employeeId=${employeeId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "ExperieceAPi", id: "ExperieceAPiLIST" }],
    }),
    updateLeader: builder.mutation<IExperienceRes, IExperience>({
      query(data) {
        return {
          url: `/experience/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "ExperieceAPi", id: "ExperieceAPiLIST" }],
    }),
    deleteFamily: builder.mutation({
      query: (id) => ({
        url: `/experience/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: () => [{ type: "ExperieceAPi", id: "ExperieceAPiLIST" }],
    }),
  }),
});

export const {
  useCreateExperieceMutation,
  useGetExperieceByIdQuery,
  useGetExperieceByemployeeIdQuery,
  useUpdateLeaderMutation,
  useDeleteFamilyMutation,

} = ExperieceAPi;
