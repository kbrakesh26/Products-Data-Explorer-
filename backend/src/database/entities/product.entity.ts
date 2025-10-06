import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  slug!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  shortDescription!: string;

  @Column({ nullable: true })
  imageUrl!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ nullable: true })
  categoryId!: string;

  @ManyToOne(() => Category, { nullable: true })
  @JoinColumn({ name: 'categoryId' })
  category?: Category;

  @Column('decimal', { nullable: true })
  price!: number;

  @Column({ nullable: true })
  currency!: string;

  @Column('float', { nullable: true })
  rating!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
