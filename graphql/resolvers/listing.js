const Listing = require("../../model/Listing");
const Booking = require("../../model/Booking");
const checkAuth = require("../../util/checkAuth");
const User = require("../../model/User");
module.exports = {
  Query: {
    async getAllListings() {
      try {
      const listings = await Listing.find().sort({ createdAt: -1 });
      return listings;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getMyListings(_, args, context) {
      try {
        const user = checkAuth(context);
          const listings = await Listing.find({username: user.username}).sort({createdAt: -1})
          return listings;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getListingbyName(_, { username }) {
      try {
        const listings = await Listing.find({username}).sort({ createdAt: -1 });
        if (listings) {
          return listings;
        } else {
          throw new Error("Listing not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getListingbyCity(_, { city }) {
      try {
        const listings = await Listing.find({city}).sort({ createdAt: -1 });
        if (listings) {
          return listings;
        } else {
          throw new Error("Listings not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getListingbyPostalCode(_, { postal_code }) {
      try {
        const listings = await Listing.find({postal_code}).sort({ createdAt: -1 });
        if (listings) {
          return listings;
        } else {
          throw new Error("listing not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createListing(_, args, context) {
      const user = checkAuth(context);

      if(user.type == 'admin'){
        const newListing = new Listing({
        listing_id: args.listing_id,
        listing_title: args.listing_title,
        description: args.description,
        street: args.street,
        city: args.city,
        postal_code: args.postal_code,
        price: args.price,
        email: user.email,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      
      const listing = await newListing.save();
      return listing;

      }else{
        return 'Admin Restriction!'
      }
      
      
    },
  },
};
