const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const customerRoutes = require('./Routes/customerRoutes');
const userRoute = require('./Routes/registerRoutes');
const productRoutes = require('./Routes/addProductRoutes');
const billRoutes = require('./Routes/generateBillRoutes');
const otpAuthRoutes = require('./Routes/otpAuthRouter');
const authRoutes = require('./Routes/AuthenticationRoutes');
const mongoose = require("mongoose");
// const MongoDBConnect = require("./config/database");

app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
	.then(() => console.log("Connected to db"))
	.catch((err) => console.log(err))

app.use(userRoute);
app.use(customerRoutes);
app.use(productRoutes);
app.use(billRoutes);
app.use(otpAuthRoutes);
app.use(authRoutes);

app.listen(process.env.PORT, () => {
  console.log("starting the server");
});
