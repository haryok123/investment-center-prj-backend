const Quotation = require('../models/Quotation');

const getQuotations = async (req, res) => {
    try {
        const { from, to } = req.query;
        let query = { securityCode: req.params.code };

        if (from || to) {
            query.date = {};
            if (from) query.date.$gte = new Date(from);
            if (to) query.date.$lte = new Date(to);
        }

        const quotations = await Quotation.find(query).sort({ date: -1 }).limit(100);
        res.json(quotations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createQuotation = async (req, res) => {
    try {
        const quotation = new Quotation(req.body);
        await quotation.save();
        res.status(201).json(quotation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getQuotations,
    createQuotation
};
