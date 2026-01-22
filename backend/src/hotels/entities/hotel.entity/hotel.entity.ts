import { ReviewEntity } from 'src/reviews/entities/review.entity/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HotelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @OneToMany(() => ReviewEntity, (review) => review.hotel)
  reviews: ReviewEntity[];
}
