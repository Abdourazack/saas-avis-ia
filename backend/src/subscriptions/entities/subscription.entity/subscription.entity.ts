import { UserEntity } from 'src/users/entities/user.entity/user.entity';
import { Column, OneToOne } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser/decorator/columns/PrimaryGeneratedColumn.js';
import { Entity } from 'typeorm/decorator/entity/Entity.js';

@Entity()
export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plan: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToOne(() => UserEntity, (user) => user.subscription)
  user: UserEntity;
}
