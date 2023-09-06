import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { RootState } from '../redux/store'

const baseQuery = fetchBaseQuery({
  baseUrl:"https://em-v2.oceantech.com.vn/em/",
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState() as RootState
    console.log(accessToken)

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
})

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result.meta?.response?.status === 403) {
    // try to get a new token
    const refreshToken = await baseQuery('/api/refreshToken', api, extraOptions) // Request refreshToken
    if (refreshToken.data) {
      // store the new token
      const user = api.getState() as RootState // Cấp lại AccessToken
      console.log(user, 'user accentoken')
    }
  }
  return result
}
