const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
    securityCode: { type: mongoose.Schema.Types.ObjectId, ref: "Security" },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    buyDate: Date,
    sellDate: Date,
    buyPrice: Number,
    sellPrice: Number,
    profit: { type: Number, default: 0 }
}, { timestamps: true }
);

module.exports = mongoose.model("Investment", investmentSchema);
