const express = require("express");
const contractRoutes = require("./routes/contract-routes");
const { getData } = require("./controllers/contractController");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getContractData", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.send({ status: "error", message: "url is required" });

  const response = await getData(url);

  return res.json({ status: 200, data: response });
});

app.listen(3000, () => console.log("Server running on port 3000"));
