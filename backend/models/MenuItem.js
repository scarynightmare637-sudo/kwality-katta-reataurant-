const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please provide item name'],
    trim: true 
  },
  description: { 
    type: String, 
    required: [true, 'Please provide description'] 
  },
  price: { 
    type: Number, 
    required: [true, 'Please provide price'],
    min: 0 
  },
  category: { 
    type: String, 
    enum: ['appetizers', 'main', 'breads', 'snacks', 'desserts', 'beverages'],
    required: [true, 'Please provide category'] 
  },
  isVegetarian: { 
    type: Boolean, 
    default: true 
  },
  isSpicy: { 
    type: Boolean, 
    default: false 
  },
  spicyLevel: { 
    type: Number, 
    enum: [0, 1, 2, 3],
    default: 0 
  },
  image: String,
  available: { 
    type: Boolean, 
    default: true 
  },
  preparationTime: { 
    type: Number,
    default: 15 
  },
  ratings: { 
    average: { type: Number, default: 0 }, 
    count: { type: Number, default: 0 } 
  },
  popularity: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
