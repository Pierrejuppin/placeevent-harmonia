const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const roleRouter = require("./role/router");

router.use("/role", roleRouter);

const paidRouter = require("./paid/router");

router.use("/paid", paidRouter);

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

/* ************************************************************************* */

module.exports = router;
