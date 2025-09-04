const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    minAmount: Number,
    rating: String,
    profitability: Number,
    info: String,
    quotesHistory: [
        {
            date: { type: Date, default: Date.now },
            price: Number,
        },
    ],
});

module.exports = mongoose.model("Security", securitySchema);
