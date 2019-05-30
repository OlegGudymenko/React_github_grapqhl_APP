import gql from "graphql-tag";

const getProfile = `
  name
  url
  bio
  avatarUrl
  login
  email
`;

const getRepositories = `
  repositories(first: 10, after: $after) {
    nodes {
      name
      description
      id
      createdAt
      url
      languages(first: 10){
        nodes {
          name
          color
        } 
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
  }
`

const getFollowers = `
  followers(first: 10, after: $after) {
    nodes {
      ${getProfile}
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
  }
`;


export const GET_USER = gql`
  query($login: String!, $after: String) {
    user(login: $login) {
      ${getRepositories}
      ${getProfile}
      ${getFollowers}
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query($login: String!, $after: String) {
    user(login: $login) {
      name
      ${getRepositories}
    }
  }
`

export const GET_FOLLOWERS = gql`
  query($login: String!, $after: String) {
    user(login: $login) {
      name
      ${getFollowers}
    }
  }
`
