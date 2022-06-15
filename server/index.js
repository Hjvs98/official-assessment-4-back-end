const express = require("express");
const cors = require("cors");
const app = express();
const { getCompliment } = require("./controller");
const { getFortune } = require("./controller");
const shoeController = require("./controller");
const { getTime } = require("./controller");

app.use(express.json());
app.use(cors());
express.static(`/client/index.html`);
app.use(express.static("client"));

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/shoes", shoeController.getShoes);
app.post("/api/shoes", shoeController.createShoe);
app.delete("/api/shoes/:id", shoeController.deleteShoe);
app.get("/api/time/:value", getTime);

app.listen(4000, () => console.log("Server running on 4000"));
