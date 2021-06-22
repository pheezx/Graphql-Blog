The graphql queries from the video

{blogPosts {id, text}}

mutation {
  addBlogPost(text: "This is the second message!") {
    id, text
  }
}

mutation {
  editBlogPost(
    id: "8c35625c-3198-4fac-9242-46f2a6462239",
    text: "Edited"
  ) { id, text }
}

mutation {
  deleteBlogPost(id: "8c35625c-3198-4fac-9242-46f2a6462239"){
    id, text
  }
}