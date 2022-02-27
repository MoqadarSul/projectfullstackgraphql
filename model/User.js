const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  email:{
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
  },
  password:{
    type: String,
    required: true,
    min: 6,
  },
  firstname: String,
  lastname: String,
  type: {
    type: String,
    enum: ['admin', 'customer'],
    required: true
  },
  createdAt: String
});

module.exports = model('User', userSchema);