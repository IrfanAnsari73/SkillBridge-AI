const express = require("express");

const {
    getPortfolio,
    savePortfolio,
    deletePortfolio,
    getPublicPortfolio,
} = require("../controllers/portfolioController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();


// =========================
// PUBLIC PORTFOLIO
// =========================

router.get(
    "/public/:userId",
    getPublicPortfolio
);


// =========================
// PROTECTED PORTFOLIO
// =========================

router.use(protect);

router.get(
    "/",
    getPortfolio
);

router.post(
    "/",
    savePortfolio
);

router.delete(
    "/",
    deletePortfolio
);


module.exports = router;