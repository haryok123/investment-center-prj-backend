const Investment = require('../models/Investment');
const Deposit = require('../models/Deposit');
const Security = require('../models/Security');
const Quotation = require('../models/Quotation');

const getPortfolioAnalytics =  async (req, res) => {
    try {
        const clientId = req.params.clientId;

        const investments = await Investment.find({ clientId, status: 'active' });
        const deposits = await Deposit.find({ clientId, status: 'active' });

        let totalInvestments = 0;
        let totalDeposits = 0;
        let totalProfit = 0;

        investments.forEach(inv => {
            totalInvestments += inv.totalAmount;
            totalProfit += inv.profit;
        });

        deposits.forEach(dep => {
            totalDeposits += dep.amount;
            totalProfit += dep.expectedReturn;
        });

        const portfolio = {
            clientId,
            totalInvestments,
            totalDeposits,
            totalValue: totalInvestments + totalDeposits,
            totalProfit,
            profitability: ((totalProfit / (totalInvestments + totalDeposits)) * 100).toFixed(2),
            investments: investments.length,
            deposits: deposits.length
        };

        res.json(portfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getMarketAnalytics =  async (req, res) => {
    try {
        const topPerformers = await Security.find({ isActive: true })
            .sort({ lastYearReturn: -1 })
            .limit(10);

        const recentQuotations = await Quotation.aggregate([
            { $sort: { date: -1 } },
            { $group: { _id: '$securityCode', latestQuotation: { $first: '$$ROOT' } } },
            { $replaceRoot: { newRoot: '$latestQuotation' } },
            { $sort: { changePercent: -1 } },
            { $limit: 10 }
        ]);

        res.json({
            topPerformers,
            marketMovers: recentQuotations
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getPortfolioAnalytics,
    getMarketAnalytics
}