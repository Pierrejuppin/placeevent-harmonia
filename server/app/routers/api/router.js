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

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const eventRouter = require("./event/router");

router.use("/event", eventRouter);

const reservationRouter = require("./reservation/router");

router.use("/reservation", reservationRouter);

const authentificationRouter = require("./auth/router");

router.use("/auth", authentificationRouter);

/* ************************************************************************* */

module.exports = router;
