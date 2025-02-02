require("dotenv").config();
const app =require("./src/app")
const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require('express');

app.get('/', (req, res) => {
  res.send('Server is running on Vercel!');
});

// Export the Express app as a Vercel function
module.exports = app;
