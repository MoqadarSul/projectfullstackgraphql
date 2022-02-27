const { gql } = require('apollo-server');

module.exports = gql`
  type listing {
    listing_id: ID!
    createdAt: String!
    username: String!
    listing_title: String!
    description: String!
    street: String!
    city: String!
    postal_code: String!
    price: String!
    email: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    firstname: String!
    lastname: String!
    type: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    firstname: String!
    type: String!
    lastname: String!
    email: String!
  }
  type booking{
    listing_id: ID!
    booking_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    username: String!
  }
  type Query {
    getAllListings: [listing]
    getMyListings: [listing]
    getListing(listing_id: ID!): listing
    getListingbyPostalCode(postal_code: String!): [listing]
    getListingbyCity(city: String!): [listing]
    getListingbyName(username: String!): [listing]
    getmyBookings: [booking]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createListing(listing_id: ID!,listing_title: String!,description: String!,street: String!,city: String!,postal_code: String!,price: String!): listing!
    bookListing(listing_id: ID!, booking_id: ID!, booking_start: String!, booking_end: String!): booking!
    
  }
`;