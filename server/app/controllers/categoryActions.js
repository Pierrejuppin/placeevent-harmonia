const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const category = req.body;

  try {
    const insertId = await tables.category.create(category);

    res.status(201).json({ insertId });
  } catch (e) {
    next(e);
  }
};

const readAll = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();

    res.json(categories);
  } catch (e) {
    next(e);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const category = await tables.category.readOneById(req.params.id);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const category = req.body;

  try {
    const updated = await tables.category.update(req.params.id, category);

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
    const destroyed = await tables.category.destroy(req.params.id);

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
