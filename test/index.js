import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});


const port = 5000;

const start = async () => {
    try {
      // connectDB
      app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();