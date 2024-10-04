import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column()
  assigned_client: string

  @Column()
  assigned_entrepreneur: string
}
