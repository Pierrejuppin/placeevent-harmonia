const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservation" });
  }

  async create(reservation) {
    const { userId, eventId, paidId } = reservation;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(
      user_id,
      event_id,
      paid_id) 
      VALUES (?, ?, ?)`,
      [userId, eventId, paidId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT
      r.reservation_id,
      u.user_id,
      u.first_name,
      u.last_name,
      e.event_id,
      e.name,
      e.image,
      e.artist,
      p.paid_id
      FROM ${this.table} AS r 
      JOIN users AS u ON r.user_id = u.user_id
      JOIN event AS e ON r.event_id = e.event_id
      JOIN paid AS p ON r.paid_id = p.paid_id`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT
      r.reservation_id,
      u.user_id,
      u.first_name,
      u.last_name,
      e.event_id,
      e.name,
      e.image,
      e.artist,
      p.paid_id
      FROM ${this.table} AS r 
      JOIN users AS u ON r.user_id = u.user_id
      JOIN event AS e ON r.event_id = e.event_id
      JOIN paid AS p ON r.paid_id = p.paid_id
      WHERE r.reservation_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, reservation) {
    const { userId, eventId, paidId } = reservation;
    const [result] = await this.database.query(
      `UPDATE ${this.table}
      SET user_id = ?,
      event_id = ?,
      paid_id = ?
      WHERE reservation_id = ?`,
      [userId, eventId, paidId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE reservation_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  async findByUserId(id) {
    const [rows] = await this.database.query(
      `SELECT
        r.reservation_id,
        u.user_id,
        u.first_name,
        u.last_name,
        e.event_id,
        e.name,
        e.image,
        e.artist,
        e.city,
        e.date
      FROM ${this.table} AS r 
      JOIN users AS u ON r.user_id = u.user_id
      JOIN event AS e ON r.event_id = e.event_id
      WHERE r.user_id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = ReservationRepository;
