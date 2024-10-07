import { Client } from 'src/clients/client.entity'
import { Entrepreneur } from 'src/entrepreneurs/entrepreneur.entity'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  budget: number

  @Column()
  start_date: Date

  @Column()
  end_date: Date

  @OneToOne(() => Client, (client) => client.id)
  client_id: Client

  @OneToOne(() => Entrepreneur, (entrepreneur) => entrepreneur.id)
  entrepreneur_id: Entrepreneur
}
