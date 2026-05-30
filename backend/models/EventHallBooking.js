const mongoose = require('mongoose');

const eventHallBookingSchema = new mongoose.Schema({
  eventId: { 
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
  eventType: { 
    type: String, 
    enum: ['birthday', 'anniversary', 'wedding', 'corporate', 'engagement'],
    required: true 
  },
  eventDate: { 
    type: Date, 
    required: true 
  },
  startTime: String,
  endTime: String,
  expectedGuests: { 
    type: Number, 
    required: true,
    min: 10,
    max: 500 
  },
  duration: { 
    type: Number,
    required: true 
  },
  cateringRequired: { 
    type: Boolean, 
    default: true 
  },
  decorationRequired: { 
    type: Boolean, 
    default: false 
  },
  specialRequirements: String,
  budgetRange: {
    type: String,
    enum: ['5000-10000', '10000-25000', '25000-50000', '50000-100000', '100000+']
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending' 
  },
  quotationSent: { 
    type: Boolean, 
    default: false 
  },
  quotationAmount: Number,
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

eventHallBookingSchema.pre('save', async function(next) {
  if (!this.eventId) {
    this.eventId = 'EVT' + Date.now();
  }
  next();
});

module.exports = mongoose.model('EventHallBooking', eventHallBookingSchema);
