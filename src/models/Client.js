const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownershipType: { type: String, required: true, enum: ['ТОВ', 'ПП', 'АТ', 'ПАТ', 'КТ', 'ФОП'] },
    address: { type: String, required: true },
    phone: { type: String, required: true},
}, { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);
