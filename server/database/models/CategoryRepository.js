const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async create(category) {
    const categoryName = category.name;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [categoryName]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT category.category_id, category.name FROM ${this.table} WHERE category_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, category) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE category_id = ?`,
      [category.name, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE category_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = CategoryRepository;
