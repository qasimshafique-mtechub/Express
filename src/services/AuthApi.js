import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  tagTypes: ["blog"],
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_PATH}` }),
  endpoints: (builder) => ({
    getBlogTitle: builder.query({
      query: () => {
        // console.log("token", token);
        return {
          url: "blog/heading/show",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      providesTags: ["blog"],
    }),
    getAllBlog: builder.query({
      query: () => {
        // console.log("token", token);
        return {
          url: "blog",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      providesTags: ["blog"],
    }),
    getOneBlog: builder.query({
      query: (id) => {
        console.log("getOneBlogtoken", id);

        return {
          url: `blog/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      providesTags: ["blog"],
    }),
    addBlog: builder.mutation({
      query: ({ formdata, token }) => {
        console.log("library", formdata);
        console.log("token", token);
        return {
          url: "admin/blog",
          method: "POST",
          body: formdata,
          headers: {
            // 'Content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["library"],
    }),
    editLibraryData: builder.mutation({
      query: ({ id, ActualData }) => {
        console.log("library", ActualData);
        return {
          url: `library/${id}`,
          method: "PUT",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["library"],
    }),
    deleteLibraryData: builder.mutation({
      query: (id) => {
        console.log("library", id);
        return {
          url: `library/${id}`,
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["library"],
    }),
    addContact: builder.mutation({
      query: (ActualData) => {
        console.log("contacts", ActualData);
        return {
          url: "contact",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["contact"],
    }),
    addObjective: builder.mutation({
      query: (ActualData) => {
        console.log("objective", ActualData);
        return {
          url: "objective",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["objective"],
    }),
    addSkill: builder.mutation({
      query: (ActualData) => {
        console.log("skill", ActualData);
        return {
          url: "skill",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["skill"],
    }),
    addEducation: builder.mutation({
      query: (ActualData) => {
        console.log("skill", ActualData);
        return {
          url: "education",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["education"],
    }),
    addExperience: builder.mutation({
      query: (ActualData) => {
        console.log("skill", ActualData);
        return {
          url: "experience",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["education"],
    }),
    addLanguage: builder.mutation({
      query: (ActualData) => {
        console.log("skill", ActualData);
        return {
          url: "language",
          method: "POST",
          body: ActualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["language"],
    }),
    addProfile: builder.mutation({
      query: ({ token, formdata }) => {
        console.log("formdata", formdata);
        console.log("formdata", token);

        return {
          url: "user/profile",
          method: "POST",
          body: formdata,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["profile"],
    }),
    getProfile: builder.query({
      query: (token) => {
        console.log("getOneBlogtoken", token);
        return {
          url: "user/profile",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useGetBlogTitleQuery,
  useGetAllBlogQuery,
  useGetOneBlogQuery,
  useAddBlogMutation,
  useEditLibraryDataMutation,
  useAddContactMutation,
  useAddProfileMutation,
  useGetProfileQuery,
  useAddSkillMutation,
  useAddObjectiveMutation,
  useAddEducationMutation,
  useAddExperienceMutation,
  useAddLanguageMutation,
} = userAuthApi;
