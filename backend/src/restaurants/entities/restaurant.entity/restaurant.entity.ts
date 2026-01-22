import { ReviewEntity } from 'src/reviews/entities/review.entity/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestaurantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  cuisineType: string;

  @OneToMany(() => ReviewEntity, (review) => review.restaurant)
  reviews: ReviewEntity[];
}
