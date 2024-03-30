const express=require("express");
const helmet = require('helmet');
const CORS=require('cors');
const { router } = require("./routes/server.js");
const app=express()

app.use(CORS()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(helmet()); // Apply Helmet middleware for security headers
app.use(router)
port = 2000;
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});

module.exports={app}