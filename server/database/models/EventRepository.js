const AbstractRepository = require("./AbstractRepository");

class EventRepository extends AbstractRepository {
  constructor() {
    super({ table: "event" });
  }

  async create(event) {
    const { name, image, artist, city, description, date, price, categoryId } =
      event;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
      name,
      image,
      artist,
      city,
      description,
      date,
      price,
      category_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, image, artist, city, description, date, price, categoryId]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT
      e.event_id,
      e.name,
      e.image,
      e.artist,
      e.city,
      e.description,
      e.date,
      e.price,
      e.category_id,
      c.name AS category_name
      FROM ${this.table} e
      JOIN category c ON e.category_id = c.category_id
      WHERE e.event_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT
      e.event_id,
      e.name,
      e.image,
      e.artist,
      e.city,
      e.description,
      e.date,
      e.price,
      e.category_id,
      c.name AS category_name
      FROM ${this.table} e
      JOIN category c ON e.category_id = c.category_id`
    );
    return rows;
  }

  async update(id, event) {
    const { name, image, artist, city, description, date, price, categoryId } =
      event;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET 
      name = ?,
      image = ?,
      artist = ?,
      city = ?,
      description = ?,
      date = ?,
      price = ?,
      category_id = ?
      WHERE event_id = ?`,
      [name, image, artist, city, description, date, price, categoryId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE event_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = EventRepository;
