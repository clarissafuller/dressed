const db = require("../config/connection");
const { Tech } = require("../models");
const cleanDB = require("./cleanDB");

const techData = require("./clothesData.json");

db.once("open", async () => {
  await cleanDB("Clothes", "teches");

  await Clothes.insertMany(clothesData);

  console.log("clothes seeded!");
  process.exit(0);
});
