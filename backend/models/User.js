const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please provide a name'],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Please provide an email'],
    unique: true, 
    lowercase: true
  },
  phone: { 
    type: String, 
    required: [true, 'Please provide a phone number']
  },
  password: { 
    type: String, 
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  role: { 
    type: String, 
    enum: ['customer', 'owner', 'admin'], 
    default: 'customer' 
  },
  address: {
    street: String,
    city: { type: String, default: 'Nashik' },
    postalCode: String
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
