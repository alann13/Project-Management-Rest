import { IsNotEmpty, IsEmail } from 'class-validator'
import { Project } from 'src/projects/project.entity'
import { OneToMany } from 'typeorm'

export class CreateEntrepreneurDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  name: string

  address: string

  @OneToMany(() => Project, (project) => project.id, { eager: true })
  projects: Project[]
}
