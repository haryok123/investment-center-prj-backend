const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
    security: { type: mongoose.Schema.Types.ObjectId, ref: "Security" },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    buyDate: Date,
    sellDate: Date,
    buyPrice: Number,
    sellPrice: Number,
});

module.exports = mongoose.model("Investment", investmentSchema);
