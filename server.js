const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const userRoute = require("./routes/userRoute");
const roleRoute = require("./routes/roleRoute");

app.use("/", userRoute);
app.use("/", roleRoute);

app.listen(3000, () => {
    console.log("Server running at port 3000");
});