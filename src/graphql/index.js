import ApolloClient from "apollo-boost";
// put your token here
const token = 'b8d0633352bd06e249a001ec776ac844dee9a14b';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  },
});

export default client;