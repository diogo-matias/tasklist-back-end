import { randomUUID } from "crypto";

export class Task {
  private _id: string;
  get id() {
    return this._id;
  }

  private _user_id: string;
  get user_id() {
    return this._user_id;
  }

  description: string;
  detail: string;
  arquived?: boolean;
  randomColor?: number;

  constructor(description: string, detail: string, user_id: string) {
    this._id = randomUUID();
    this._user_id = user_id;
    this.description = description;
    this.detail = detail;
    this.randomColor = Math.floor(Math.random() * 3);
    this.arquived = false;
  }

  parseKeys() {
    return {
      id: this._id,
      user_id: this._user_id,
      description: this.description,
      detail: this.detail,
      randomColor: this.randomColor,
      arquived: this.arquived,
    };
  }
}
