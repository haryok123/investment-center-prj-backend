const Security = require('../models/Security');

const getSecurities = async (req, res) => {
    try {
        const securities = await Security.find();
        res.json(securities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createSecurity = async (req, res) => {
    try {
        const security = new Security(req.body);
        const newSecurity = await security.save();
        res.status(201).json(newSecurity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSecurityByCode = async (req, res) => {
    try {
        const security = await Security.findById(req.params.id);
        if (!security) return res.status(404).json({ message: "Security not found" });
        res.json(security);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateSecurity = async (req, res) => {
    try {
        const security = await Security.findOneAndUpdate(
            { securityId: req.params.id },
            req.body,
            { new: true}
        );
        if (!security) {
            return res.status(404).json({ message: "Security not found" });
        }
        res.json(security);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteSecurity = async (req, res) => {
    try {
        const deletedSecurity = await Security.findByIdAndDelete(req.params.id);
        if (!deletedSecurity) return res.status(404).json({ message: "Security not found" });
        res.json({ message: "Security deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getSecurities,
    createSecurity,
    getSecurityByCode,
    updateSecurity,
    deleteSecurity
};