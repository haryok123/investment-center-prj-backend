const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownershipType: { type: String, required: true },
    address: String,
    phone: String,
});

module.exports = mongoose.model("Client", clientSchema);
