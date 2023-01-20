const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

/* ROUTES */
app.use("/api/users", userRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
