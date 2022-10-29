require("dotenv").config();
const express = require("express");
const RateLimit = require("express-rate-limit");
const helmet = require("helmet");
const app = express();
const userRouter = require("./routes/user.router");
const moviesRouter = require("./routes/movies.router");
const DB = require("./db/db.config");
DB.connectDB();

// set up rate limiter: maximum of five requests per minute
const limiter = new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // limit each IP to 10 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cookie-parser")());
app.use(require("cors")());
app.use(helmet());

app.get("/", (req, res) => {
  console.log("request of base api", req);
  res.send({
    message: "Ticaret APIs are alive",
  });
});

app.use("/", moviesRouter);
app.use("/user", userRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}🔥`));
