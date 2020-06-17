const express = require("express");
const mongoose = require("mongoose");
const { mongoURL } = require("./config/keys");
const app = express();
const items = require("./routes/api/items");
const path = require("path");

//Acts as middleware
app.use(express.json());

app.use("/api/items", items);

//Connect to mongo
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo DB connected....");
  })
  .catch((err) => console.log(err));

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on PORT ${port}`);
});
