import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slice/login.slice";
import { EmployeeAPI } from "./slice/Employee";
import { ExperieceAPi } from "./slice/Experience";
import { FamilyApi } from "./slice/fammily";
import { LeaderApi } from "./slice/leader";
import { ProposalAPI } from "./slice/Proposal";
import { CertificateAPI } from "./slice/Certificate";
import { ProcessAPI } from "./slice/Proccess";
import { SalaryIncreateApi } from "./slice/Salary_increate";

export const store = configureStore({
  reducer: {
    [EmployeeAPI.reducerPath]: EmployeeAPI.reducer,
    [ExperieceAPi.reducerPath]: ExperieceAPi.reducer,
    [FamilyApi.reducerPath]: FamilyApi.reducer,
    [LeaderApi.reducerPath]: LeaderApi.reducer,
    [ProposalAPI.reducerPath]: ProposalAPI.reducer,
    [SalaryIncreateApi.reducerPath]: SalaryIncreateApi.reducer,
    [CertificateAPI.reducerPath]: CertificateAPI.reducer,
    [ProcessAPI.reducerPath]: ProcessAPI.reducer,
    auth: LoginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      EmployeeAPI.middleware,
      ExperieceAPi.middleware,
      FamilyApi.middleware,
      ProcessAPI.middleware,
      SalaryIncreateApi.middleware,
      ProposalAPI.middleware,
      LeaderApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
