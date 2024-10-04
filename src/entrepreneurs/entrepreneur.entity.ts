import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Entrepreneur {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  name: string

  @Column()
  address: string
}
