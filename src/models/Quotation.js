const mongoose = require("mongoose");

const quotationsSchema = new mongoose.Schema({
    securityCode: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    volume: { type: Number, default: 0 },
    change: { type: Number, default: 0 },
    changePercent: { type: Number, default: 0 }
}, { timestamps: true });

module.exports =  mongoose.model("Quotation", quotationsSchema);