const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const paid = req.body;

  try {
    const insertId = await tables.paid.create(paid);

    res.status(201).json({ insertId });
  } catch (e) {
    next(e);
  }
};

const readAll = async (req, res, next) => {
  try {
    const paid = await tables.paid.readAll();

    res.json(paid);
  } catch (e) {
    next(e);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const paid = await tables.paid.readOneById(req.params.id);

    if (paid == null) {
      res.sendStatus(404);
    } else {
      res.json(paid);
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const paid = req.body;

  try {
    const updated = await tables.paid.update(req.params.id, paid);

    if (updated) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

const destroy = async (req, res, next) => {
  try {
    const destroyed = await tables.paid.destroy(req.params.id);

    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = { create, readAll, readOneById, update, destroy };
