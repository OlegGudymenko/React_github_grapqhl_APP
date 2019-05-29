import ApolloClient from "apollo-boost";
// put your token here
const token = '';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  },
});

export default client;