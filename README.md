# Kwality Katta - Restaurant Management System

**Authentic Maharashtrian Cuisine | Nashik**

🍽️ Complete web platform for restaurant management, table booking, event hall reservations, online ordering, and real-time notifications.

## 📊 Restaurant Info
- **Name**: Kwality Katta (TM)- हांडगे बंधु
- **Address**: Shop 4-5, Jatra Hotel, Nashik
- **Phone**: +91 95615 79333
- **Hours**: 24/7 Open
- **Rating**: 4.8/5 (249+ reviews)
- **Specialties**: Misal Pav, Vada Rassa, Chole Bhature

## 🎯 Features

### For Customers
- ✅ Browse & search menu
- ✅ Online table booking (individual & couples)
- ✅ Event hall booking (birthdays, weddings, etc)
- ✅ Online ordering & home delivery (5km radius)
- ✅ Real-time order tracking
- ✅ Customer reviews & ratings
- ✅ User account management

### For Restaurant Owner
- ✅ Real-time notifications (bookings, orders, events)
- ✅ Order management & status updates
- ✅ Booking management
- ✅ Dashboard & analytics
- ✅ Menu management
- ✅ Delivery partner management

## 🛠️ Tech Stack

### Frontend
- React.js 18+
- Material-UI (MUI) Components
- React Router v6
- Socket.io Client (Real-time updates)
- Axios (API calls)
- React Hook Form (Form validation)

### Backend
- Node.js with Express.js
- MongoDB (Database)
- Mongoose (ODM)
- Socket.io (Real-time notifications)
- JWT (Authentication)
- Bcryptjs (Password hashing)
- Nodemailer (Email notifications)

## 📁 Project Structure

```
kwality-katta-restaurant/
├── backend/
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API endpoints
│   ├── controllers/         # Business logic
│   ├── middleware/          # Auth, validation
│   ├── utils/               # Helper functions
│   ├── socket/              # Socket.io events
│   ├── config/              # Configuration files
│   ├── .env.example         # Environment template
│   ├── server.js            # Entry point
│   └── package.json
│
├── frontend/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── context/         # React Context
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # Global styles
│   │   ├── App.js           # Main component
│   │   └── index.js         # Entry point
│   ├── .env.example         # Environment template
│   └── package.json
│
├── docs/                    # Documentation
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI and other configs
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get menu item details
- `POST /api/menu` - Add menu item (admin)

### Bookings
- `POST /api/bookings/table` - Create table booking
- `GET /api/bookings/table` - Get user bookings
- `PUT /api/bookings/table/:id` - Update booking
- `DELETE /api/bookings/table/:id` - Cancel booking

### Events
- `POST /api/events/hall` - Book event hall
- `GET /api/events/hall` - Get event bookings
- `PUT /api/events/hall/:id` - Update event booking

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders` - Get user orders
- `PUT /api/orders/:id/status` - Update order status

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## 🔐 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/kwality-katta
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Maps & Payments (Optional)
GOOGLE_MAPS_API_KEY=your_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## 📚 Documentation

See `/docs` folder for detailed documentation on:
- API Documentation
- Database Schema
- Socket.io Events
- Deployment Guide

## 🔧 Development

```bash
# Run both frontend and backend simultaneously
npm install -g concurrently

# From root directory
concurrently "npm --prefix backend run dev" "npm --prefix frontend start"
```

## 📦 Dependencies

### Backend
- express
- mongoose
- socket.io
- jsonwebtoken
- bcryptjs
- dotenv
- cors
- nodemailer

### Frontend
- react
- react-dom
- react-router-dom
- @mui/material
- @mui/icons-material
- axios
- socket.io-client
- react-hook-form

## 🤝 Contributing

This project is open for contributions. Please follow the coding standards and submit pull requests.

## 📄 License

MIT License - Feel free to use this project

## 📞 Support

For issues or questions, contact: +91 95615 79333

---

**Made with ❤️ for Kwality Katta Restaurant**
