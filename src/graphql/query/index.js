import gql from "graphql-tag";

const getProfile = `
  name
  url
  bio
  avatarUrl
  login
  email
`;

const getRepositories = (limit = 10) => `
  repositories(first: ${limit}) {
    nodes {
      name
      description
      id
      createdAt
      url
      languages(first: ${limit}){
        nodes {
          name
          color
        } 
      }
    }
    totalCount
  }
`

const getFollowers = (limit = 10) =>  `
  followers(first: ${limit}) {
    nodes {
      ${getProfile}
    }
    totalCount
  }
`;


export const GET_USER = gql`
  query($login: String!) {
    user(login: $login) {
      ${getRepositories()}
      ${getProfile}
      ${getFollowers()}
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query($login: String!) {
    user(login: $login) {
      name
      ${getRepositories(100)}
    }
  }
`

export const GET_FOLLOWERS = gql`
  query($login: String!) {
    user(login: $login) {
      name
      ${getFollowers(100)}
    }
  }
`
