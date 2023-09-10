"use client"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

//define a service using a base URL

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (builder) => ({
            signupUser: builder.mutation({
                query: (user) => ({
                    url: '/register',
                    method: 'POST',
                    body: user
                })
            }),
            loginUser: builder.mutation({
                query: (user) => ({
                    url: "/login",
                    method: "POST",
                    body: user
                })
            }),
            logoutUser: builder.mutation({
                query: (payload) => ({
                    url: 'logout',
                    method: 'POST',
                    body: payload
                })
            })
        })
})

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;