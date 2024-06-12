const express = require('express');
const app = express();
const port = 8000;

const cors = require("cors")
app.use(express.json())
app.use(cors())

const authController = require("./Controllers/authController")
app.use("/auth", authController)

const productsController = require("./Controllers/proudctsController")
app.use("/products", productsController)

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});