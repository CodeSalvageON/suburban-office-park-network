const express = require("express");
const app = express();
app.get("/", (req, res)=>{
  res.send("hello")
})
app.listen(process.env.port, ()=>{
  console.log("listening yo port 3001")
})
