const Booking = require("../../model/Booking");
const checkAuth = require("../../util/checkAuth");
const Listing = require('../../model/Listing')
const User = require('../../model/User')
module.exports = {
  Query: {
    async getmyBookings(_, args, context) {
      const user = checkAuth(context);
      
      try {
        if (user.type == "customer") {
          const bookings = await Booking.find({username}).sort(
            { createdAt: -1 }
          );
          return bookings;
        } else {
          const bookings = await Booking.find({}).sort({ createdAt: -1 });
          return bookings;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async bookListing(_, args, context) {
      const user = checkAuth(context);
      const checkValidBooking = Listing.findById(args.listing_id);
      if(checkValidBooking){
         const newBooking = new Booking({
        listing_id: args.listing_id,
        booking_id: args.booking_id,
        username: user.username,
        booking_date: new Date().toISOString(),
        booking_start: args.booking_start,
        booking_end: args.booking_end,
      });
       const booking = await newBooking.save();
      return booking;
      }else{
        return 'Listing does not exist!'
      }
     
     
    },
  },
};
