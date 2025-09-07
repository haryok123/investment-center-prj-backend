const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
    clientId: { type: String, required: true },
    bankName: { type: String, required: true },
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, default: 'active' },
    expectedReturn: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("Deposit" ,depositSchema);