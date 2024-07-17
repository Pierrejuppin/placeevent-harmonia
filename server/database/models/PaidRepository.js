const AbstractRepository = require("./AbstractRepository");

class PaidRepository extends AbstractRepository {
  constructor() {
    super({ table: "paid" });
  }

  async create(isPaid) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (is_paid) VALUES (?)`,
      [isPaid]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT paid.paid_id, 
      paid.is_paid 
      FROM ${this.table}`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT paid.paid_id, 
      paid.is_paid 
      FROM ${this.table} WHERE paid_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, paid) {
    const { isPaid } = paid;
    const [result] = await this.database.query(
      `UPDATE ${this.table}
       SET is_paid = ?
      WHERE paid_id = ?`,
      [isPaid, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE paid_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = PaidRepository;
