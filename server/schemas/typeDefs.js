const typeDefs = `
  type Account {
    _id: ID!
    name: String!
    username: String
    email: Email
    password: Password
    phone: String
    birthday: String
    height: Float
    weight: Float
    sizes: Sizes
  }

  scalar Email
  scalar Password

  type Review {
    _id: ID!
    rating: Int
    details: String
    date: String
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
