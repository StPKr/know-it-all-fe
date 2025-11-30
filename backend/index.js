import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
