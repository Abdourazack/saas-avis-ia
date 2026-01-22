import { Subscription } from 'rxjs';
import { ReviewEntity } from 'src/reviews/entities/review.entity/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm/browser/decorator/relations/JoinColumn.js';
import { OneToOne } from 'typeorm/browser/decorator/relations/OneToOne.js';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: ReviewEntity[];

  @OneToOne(() => Subscription)
  @JoinColumn()
  subscription: Subscription;
}
