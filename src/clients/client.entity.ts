import { Project } from 'src/projects/project.entity'
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column()
  address: string

  @OneToMany(() => Project, (project) => project.id)
  projects: Project[]
}
