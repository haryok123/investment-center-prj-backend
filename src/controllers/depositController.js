
const Deposit = require('../models/Deposit');

const getDeposits =  async (req, res) => {
    try {
        const { clientId } = req.query;
        let query = {};
        if (clientId) query.clientId = clientId;

        const deposits = await Deposit.find(query).sort({ startDate: -1 });
        res.json(deposits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDeposit = async (req, res) => {
    try {
        const deposit = new Deposit(req.body);
        const duration = (deposit.endDate - deposit.startDate) / (1000 * 60 * 60 * 24 * 365);
        deposit.expectedReturn = deposit.amount * (deposit.interestRate / 100) * duration;
        await deposit.save();
        res.status(201).json(deposit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getDeposits,
    createDeposit,
}