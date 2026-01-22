import { AiResponseEntity } from 'src/ai-responses/entities/ai-response.entity/ai-response.entity';
import { HotelEntity } from 'src/hotels/entities/hotel.entity/hotel.entity';
import { RestaurantEntity } from 'src/restaurants/entities/restaurant.entity/restaurant.entity';
import { UserEntity } from 'src/users/entities/user.entity/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  rating: number;

  @ManyToMany(() => UserEntity, (user) => user.reviews)
  user: UserEntity;

  @ManyToMany(() => HotelEntity, (hotel) => hotel.reviews, { nullable: true })
  hotel: HotelEntity;

  @ManyToMany(() => RestaurantEntity, (restaurant) => restaurant.reviews, {
    nullable: true,
  })
  restaurant: RestaurantEntity;

  @OneToOne(() => AiResponseEntity, (aiResponse) => aiResponse.review)
  aiResponse: AiResponseEntity;
}
