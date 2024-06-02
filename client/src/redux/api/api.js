import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const api = createApi({


  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/api/v1/` }),
  tagTypes: ["Chat", "User", "Message"],

  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "chats/my",
        credentials: "include"
      }),
      providesTags: ["Chat"],
    }),

    searchUsers: builder.query({
      query: (name) => ({
        url: `users/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),

    sendFriendRequest: builder.mutation({
      query: (data) => ({
        url: "users/sendrequest",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      providesTags: ["User"]
    }),

    getNotifications: builder.query({
      query: () => ({
        url: `users/notifications`,
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
    }),


    acceptFriendRequest: builder.mutation({
      query: (data) => ({
        url: "users/acceptrequest",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      providesTags: ["Chat"]
    }),

    chatDetails: builder.query({
      query: ({ chatId, populate = false }) => {

        let url = `chats/${chatId}`;
        if (populate) url += "?populate=true";

        return {
          url,
          credentials: "include",
        }
      },
      providesTags: ["Chat"],
    }),

    getMessages: builder.query({
      query: ({ chatId, page }) => (
        {
          url: `chats/message/${chatId}?page=${page}`,
          credentials: "include",
        }
      ),
      keepUnusedDataFor: 0,
    }),

    sendAttachments: builder.mutation({
      query: (data) => ({
        url: "chats/message",
        method: "POST",
        body: data,
        credentials: "include",
      })
    }),

  })

})


export default api;
export const { useMyChatsQuery, useLazySearchUsersQuery, useSendFriendRequestMutation,
  useGetNotificationsQuery, useAcceptFriendRequestMutation,
  useChatDetailsQuery, useGetMessagesQuery, useSendAttachmentsMutation } = api;