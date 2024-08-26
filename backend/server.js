const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Use CORS middleware

// Use Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/your-database-name';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
