// src/stores/store.entity.ts
import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany
} from 'typeorm';
import { User } from '../users/user.entity';
import { Rating } from '../ratings/rating.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ length: 400 })
  address: string;

  @ManyToOne(() => User, user => user.stores)
  owner: User;

  @OneToMany(() => Rating, rating => rating.store)
  ratings: Rating[];
}
