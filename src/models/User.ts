import { randomUUID } from "crypto";

export class User {
  email: string;
  name: string;

  private _id: string;
  get id() {
    return this._id;
  }

  private _password: string;
  get password() {
    return this._password;
  }

  constructor(email: string, password: string, name: string) {
    this._id = randomUUID();
    this.email = email.toLowerCase();
    this._password = password;
    this.name = name;
  }

  parseKeys() {
    return {
      id: this._id,
      password: this.password,
      email: this.email,
    };
  }

  update(email: string, password: string) {
    this.email = email;
    this._password = password;
  }
}
