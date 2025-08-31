import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;

  @OneToMany(() => User, (u) => u.role)
  users: User[];
}
