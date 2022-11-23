import { pgHelper } from "../database/pg-helper";
import { UserEntity } from "../database/entities/user.entity";
import { randomUUID } from "crypto";
import { User } from "../models/user";

export class UsersRepository {
  async getAllUsers(): Promise<UserEntity[]> {
    const growdeversEntities = await UserEntity.find();

    return growdeversEntities;
  }

  async createUser(
    email: string,
    password: string,
    name: string
  ): Promise<UserEntity> {
    const createdUser = UserEntity.create({
      uid: randomUUID(),
      name,
      email,
      password,
    });

    await createdUser.save();
    return createdUser;
  }

  async findUserByEmailAndPassoword(
    email: string,
    password: string
  ): Promise<UserEntity> {
    const user = await UserEntity.findOne({
      where: {
        email,
        password,
      },
      select: ["uid", "email", "name"],
    });

    return user;
  }

  async findUserByPk(user_uid: string) {
    const user = await UserEntity.findOne({
      where: {
        uid: user_uid,
      },
    });

    return user;
  }
}
