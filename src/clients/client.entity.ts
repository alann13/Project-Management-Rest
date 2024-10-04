import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  name: string

  @Column()
  address: string
}
