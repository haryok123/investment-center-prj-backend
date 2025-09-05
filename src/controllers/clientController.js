const Client = require('../models/Client');

const getClients = async (req, res) => async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createClient = async (req, res) => {
    try {
        const client = new Client(req.body);
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: "Client not found" });
        res.json(client);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) return res.status(404).json({ message: "Client not found" });
        res.json(updatedClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const deleteClient = async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (!deletedClient) return res.status(404).json({ message: "Client not found" });
        res.json({ message: "Client deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getClients,
    createClient,
    getClientById,
    updateClient,
    deleteClient
};