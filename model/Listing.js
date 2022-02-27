const { model, Schema } = require('mongoose');

const listingSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  listing_id: {
    type: String,
    required: true
  },
  listing_title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  }, 
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postal_code:{
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,  
    unique: true,
    validate: {
        validator: function(email) {
            var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return re.test(email)
        },
        message: props => `${props.value} is not a valid Email!`
    },
    required: true,
  }
});

module.exports = model('listing', listingSchema);