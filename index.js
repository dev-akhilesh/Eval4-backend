const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config();


app.use(express.json());
app.use(cors());

app.use('/users', authRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});