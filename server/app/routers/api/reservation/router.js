const express = require("express");

const router = express.Router();

const {
  create,
  readAll,
  readOneById,
  readByUserId,
  update,
  destroy,
} = require("../../../controllers/reservationActions");

router.get("/", readAll);

router.get("/:id", readOneById);

router.get("/user/:id/", readByUserId);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
