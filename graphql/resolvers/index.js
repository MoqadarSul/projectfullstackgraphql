const listingResolvers = require('./listing');
const usersResolvers = require('./users');
const bookingResolvers = require('./booking')
module.exports = {
  Query: {
    ...listingResolvers.Query,
    ...bookingResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...listingResolvers.Mutation,
    ...bookingResolvers.Mutation
  }
};