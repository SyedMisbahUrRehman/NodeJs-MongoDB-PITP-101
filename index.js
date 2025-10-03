require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Mongo URI environment ke hisaab se choose karo
const mongoURI =
  NODE_ENV === 'production'
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;

// Connect MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log(
      NODE_ENV === 'production'
        ? '✅ Connected to MongoDB Atlas (Production)'
        : '✅ Connected to Local MongoDB (Compass - Development)'
    );

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });

// Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send(`Hello, MongoDB + Express is working in ${NODE_ENV} mode!`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ error: "Something went wrong!" });
});
