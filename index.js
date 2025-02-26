require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Mock customer data
const customers = {
    "8006183088": "Nivetha",
    "9876543210": "Abi"
};

// API Route to get customer details
app.get("/get-customer/:number", (req, res) => {
    const number = req.params.number;
    const customerName = customers[number] || "Customer";
    res.json({ customerName });
});

// Start Express Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
