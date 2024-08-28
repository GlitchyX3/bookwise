const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://project-root-eta.vercel.app', // Production domain
      'http://localhost:3001', // Local development
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// MongoDB Connection
const mongoURI = 'mongodb+srv://bookwise:BXWKueya7aclXSam@bookwise.klo2g.mongodb.net/?retryWrites=true&w=majority&appName=bookwise';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit with failure
  });

// JWT Secret
const jwtSecret = process.env.JWT_SECRET;

// Routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
