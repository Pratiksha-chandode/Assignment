// src/ratings/rating.entity.ts
import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne
} from 'typeorm';
import { User } from '../users/user.entity';
import { Store } from '../stores/store.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  rating: number;

  @ManyToOne(() => User, user => user.ratings)
  user: User;

  @ManyToOne(() => Store, store => store.ratings)
  store: Store;
}
