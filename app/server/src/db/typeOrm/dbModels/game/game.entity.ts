import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DbGame {
  // TODO: UUID
  @PrimaryGeneratedColumn() id: string;

  @Column() name: string;

  @Column() description: string;
}
