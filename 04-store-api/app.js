// Access to env variables
require("dotenv").config();

// async errors



const express = require("express");
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

app.use('/api/v1/products', productsRouter)

// products route


const port = process.env.PORT || 9000

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()