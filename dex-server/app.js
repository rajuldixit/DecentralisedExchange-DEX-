var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const Moralis = require("moralis").default;
const cors = require("cors");
require("dotenv").config();
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const API_KEY =
  process.env.MORALIS_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIwOTNiOWY4LTJlZWYtNGU4NS1iMTIwLWU1MTMxNmU0NjJkZCIsIm9yZ0lkIjoiMzgzNjUzIiwidXNlcklkIjoiMzk0MjE0IiwidHlwZUlkIjoiZjgyNmI0NDMtMDgwOC00ZGU1LWIzYjYtNWQ5ZDBiZjY0ZTI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTA4NjA3MjUsImV4cCI6NDg2NjYyMDcyNX0.5JUFoYkcSCWiP79tHvXAkXxLnDHaC03VkW3K4eN47gc";

app.get("/tokenPrices", async (req, res) => {
  await Moralis.start({
    apiKey: API_KEY
  });
  const { query } = req;
  try {
    const respOne = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressOne
    });

    const respTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressTwo
    });

    const usdPrices = {
      tokenOne: respOne.raw.usdPrice,
      tokenTwo: respTwo.raw.usdPrice,
      ratio: respOne.raw.usdPrice / respTwo.raw.usdPrice
    };

    return res.status(200).json(usdPrices);
  } catch (error) {
    return res.status(500).json({});
  }
});
app.get("/tokenList", async (req, res) => {
  try {
    const address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

    await Moralis.start({
      apiKey: API_KEY
    });
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address: address
    });

    console.log(response.raw);
  } catch (e) {
    console.error(e);
  }
  return res.status(200).json({});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
