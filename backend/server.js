const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://project-root-eta.vercel.app', // Production domain
  'http://localhost:3001', // Local development
];

app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
