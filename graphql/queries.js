import { gql } from "@apollo/client";

export const GET_BLOGPOSTS = gql`
  {
    blogPosts {
      id
      text
    }
  }
`;

export const ADD_BLOGPOST = gql`
  mutation AddBlogPost($text: String) {
    addBlogPost(text: $text) {
      id
      text
    }
  }
`;

export const DELETE_BLOGPOST = gql`
  mutation DeleteBlogPost($id: String) {
    deleteBlogPost(id: $id) {
      id 
      text
    }
  }
`

export const EDIT_BLOGPOST = gql`
  mutation EditBlogPost($id: String, $text: String) {
    editBlogPost(id: $id, text: $text) {
      id 
      text
    }
  }
`