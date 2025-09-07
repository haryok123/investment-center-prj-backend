const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    minTransactionAmount: { type: Number, required: true },
    rating: String,
    lastYearReturn: Number,
    additionalInfo: String,
});

module.exports = mongoose.model("Security", securitySchema);
