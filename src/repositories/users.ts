import { pgHelper } from "../database/pg-helper";
import { User } from "../models/user";

export class UsersRepository {
  async getAllUUsers(): Promise<User[]> {
    const result = await pgHelper.client.query("SELECT * FROM users");

    return (result as Array<any>).map((row) => {
      console.log(row);
      return row;
    });
  }

  async createUser(user: User): Promise<any[]> {
    // const result = await pgHelper.client.query("SELECT * FROM users");

    const result = await pgHelper.client.query(
      "INSERT INTO users ($1, $2, $3, $4)",
      [user.id, user.name, user.email, user.password]
    );

    return result;
  }
}
