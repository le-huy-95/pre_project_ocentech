import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";
import { IProposal, IProposalRes } from "../../../interface/Proposal.interface";

export const ProposalAPI = createApi({
  reducerPath: "ProposalAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ProposalAPI"],
  endpoints: (builder) => ({
    // /proposal/current-leader

    getProposalCurrentLeader: builder.query<IProposalRes, string | number>({
      query: () => `/proposal/current-leader`,
    }),
    // get-by-id
    getProposalById: builder.query<IProposalRes, string | number>({
      query: (id) => `/proposal/${id}`,
    }),
    // proposal?employeeId=105
    getProposalByEmp: builder.query<IProposalRes, string | number>({
      query: (id) => `/proposal?employeeId=${id}`,
      //   providesTags(result) {
      //     if (result) {
      //       const final = [
      //         ...result.data.map(({ id }) => ({
      //           type: "ProposalAPI" as const,
      //           id,
      //         })),
      //         { type: "ProposalAPI" as const, id: "ProposalAPILIST" },
      //       ];
      //       return final;
      //     }
      //     return [{ type: "ProposalAPI", id: "ProposalAPILIST" }];
      //   },
    }),

    addProposalByEmp: builder.mutation({
      query: ({
        data,
        employeeId,
      }: {
        data: Pick<
          IProposal,
          | "note"
          | "content"
          | "proposalDate"
          | "proposalStatus"
          | "leaderId"
          | "type"
          | "detailedDescription"
        >;
        employeeId: string | number;
      }) => ({
        url: `/proposal?employeeId=${employeeId}`,
        method: "POST",
        body: data,
      }),
      //   invalidatesTags: () => [{ type: "ProposalAPI", id: "ProposalAPILIST" }],
    }),
    updateLeader: builder.mutation<void, Omit<IProposal, "employeeId">>({
      query(data) {
        return {
          url: `/proposal/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "ProposalAPI", id: "ProposalAPILIST" }],
    }),
    deleteProposal: builder.mutation({
      query: (id) => ({
        url: `/proposal/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProposalByEmpQuery,
  useAddProposalByEmpMutation,
  useDeleteProposalMutation,
  useGetProposalByIdQuery,
  useGetProposalCurrentLeaderQuery,
  useUpdateLeaderMutation,
} = ProposalAPI;
