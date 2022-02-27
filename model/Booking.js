const { model, Schema } = require('mongoose');

const bookingSchema = new Schema({
  listing_id: String,
  booking_id: String,
  booking_date: String,
  booking_start: String,
  booking_end: String,
  username: String,
});

module.exports = model('booking', bookingSchema);