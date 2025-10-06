import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  productId!: string;

  @Column('text', { nullable: true })
  longDescription!: string;

  @Column('simple-json', { nullable: true })
  metadata!: Record<string, any>;
}
