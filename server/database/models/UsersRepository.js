const AbstractRepository = require("./AbstractRepository");

class UsersRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(user) {
    const { firstName, lastName, email, password, roleId } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table}(first_name, last_name, email, password, role_id) values (?, ?, ?, ?, ?)`,
      [firstName, lastName, email, password, roleId]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.user_id, u.first_name, u.last_name, u.email, u.password, u.role_id  FROM ${this.table} AS u JOIN role AS r ON u.role_id = r.role_id `
    );

    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      ` SELECT u.user_id, u.first_name, u.last_name, u.email, u.password, u.role_id FROM ${this.table} AS u JOIN role AS r ON u.role_id = r.role_id WHERE u.user_id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, user) {
    const { firstName, lastName, email, password, roleId } = user;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET first_name = ?, last_name = ?, email = ?, password = ?, role_id = ? WHERE user_id = ?`,
      [firstName, lastName, email, password, roleId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  async findUserByEmail(email) {
    const [result] = await this.database.query(
      `SELECT user_id, first_name, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return result;
  }
}

module.exports = UsersRepository;
