import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

@Entity()
export class DbGame {
  // TODO: UUID
  @PrimaryGeneratedColumn() seqId: number;

  // @Generated('uuid') // QueryFailedError: function uuid_generate_v4() does not exist
  @Column()
  id: string;

  @Column() name: string;

  @Column() description: string;

  constructor(config?: Partial<DbGame>) {
    Object.assign(this, config);
  }
}
