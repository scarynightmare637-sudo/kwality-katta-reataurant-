const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { 
    type: String, 
    unique: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  items: [{
    menuItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MenuItem'
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    specialInstructions: String
  }],
  customerInfo: {
    name: String,
    email: String,
    phone: String
  },
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    landmark: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  subtotal: Number,
  taxes: Number,
  deliveryCharge: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  totalAmount: Number,
  paymentMethod: {
    type: String,
    enum: ['online', 'cod'],
    default: 'online'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  orderStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'out-for-delivery', 'delivered', 'cancelled'],
    default: 'pending'
  },
  deliveryPartner: {
    name: String,
    phone: String,
    vehicle: String,
    currentLocation: {
      latitude: Number,
      longitude: Number
    }
  },
  specialInstructions: String,
  estimatedDeliveryTime: Date,
  actualDeliveryTime: Date,
  rating: {
    score: { type: Number, min: 1, max: 5 },
    review: String,
    createdAt: Date
  },
  cancellationReason: String,
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

orderSchema.pre('save', async function(next) {
  if (!this.orderId) {
    this.orderId = 'ORD' + Date.now();
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
