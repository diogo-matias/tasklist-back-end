import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { UserEntity as User } from "./user.entity";

@Entity({ name: "tasks" })
export class TaskEntity extends BaseEntity {
  @PrimaryColumn()
  uid: string;

  @Column()
  description: string;

  @Column()
  detail: string;

  @Column()
  arquived?: boolean;

  @Column()
  randomColor?: number;

  @Column()
  user_uid: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "uid" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
