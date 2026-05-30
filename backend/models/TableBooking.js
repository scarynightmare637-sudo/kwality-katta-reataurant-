const mongoose = require('mongoose');

const tableBookingSchema = new mongoose.Schema({
  bookingId: { 
    type: String, 
    unique: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  bookingDate: { 
    type: Date, 
    required: true 
  },
  bookingTime: { 
    type: String, 
    required: true 
  },
  numberOfGuests: { 
    type: Number, 
    required: true,
    min: 1,
    max: 50 
  },
  occasion: { 
    type: String, 
    enum: ['regular', 'anniversary', 'birthday', 'couple'],
    default: 'regular' 
  },
  specialRequests: String,
  tableNumber: Number,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending' 
  },
  notificationSent: { 
    type: Boolean, 
    default: false 
  },
  cancelReason: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

tableBookingSchema.pre('save', async function(next) {
  if (!this.bookingId) {
    this.bookingId = 'TBK' + Date.now();
  }
  next();
});

module.exports = mongoose.model('TableBooking', tableBookingSchema);
