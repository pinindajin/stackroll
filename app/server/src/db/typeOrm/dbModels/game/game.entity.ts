import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class DbGame {
  // TODO: UUID
  @PrimaryGeneratedColumn() seqId: number;

  @Generated('uuid') id: string;

  @Column() name: string;

  @Column() description: string;

  constructor(config?: Partial<DbGame>) {
    Object.assign(this, config);
  }
}
