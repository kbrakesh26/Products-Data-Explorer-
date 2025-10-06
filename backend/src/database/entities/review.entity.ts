import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  productId!: string;

  @Column('text')
  content!: string;

  @Column('float', { nullable: true })
  rating!: number;
}
