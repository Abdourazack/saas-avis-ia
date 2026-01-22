import { ReviewEntity } from 'src/reviews/entities/review.entity/review.entity';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/browser/decorator/entity/Entity.js';

@Entity()
export class AiResponseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @OneToOne(() => ReviewEntity, (review) => review.aiResponse)
  @JoinColumn()
  review: ReviewEntity;
}
