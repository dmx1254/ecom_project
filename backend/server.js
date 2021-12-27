const express = require('express')
require('dotenv').config()
const app = express();
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')
connectDB();
const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes)
app.use(express.json())

app.listen(PORT, console.log(`server running on port ${PORT}`))