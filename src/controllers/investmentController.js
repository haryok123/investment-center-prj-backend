const Investment = require('../models/Investment');


const getInvestments = async (req, res) => {
    try {
        const { clientId, status } = req.query;
        let query = {};

        if (clientId) query.clientId = clientId;
        if (status) query.status = status;

        const investments = await Investment.find(query)
            .sort({ purchaseDate: -1 })
            .populate('clientId', 'name')
            .populate('securityCode', 'name type');

        res.json(investments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createInvestment = async (req, res) => {
    try {
        const investment = new Investment(req.body);
        investment.totalAmount = investment.quantity * investment.price;
        await investment.save();
        res.status(201).json(investment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getInvestments,
    createInvestment
};