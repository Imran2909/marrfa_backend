const express = require("express");
const connection = require("./database/db");
const app = express();
const blogRouter = require("./routes/blogRoute");
var cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

// Use the blog router for /blogs routes
app.use("/blogs", blogRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  }
  console.log("Server running on port 8080");
});
