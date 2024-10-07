import { Injectable } from '@nestjs/common'
import { CreateProjectDto } from './dto/create-project.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Project } from './project.entity'
import { v4 as uuid } from 'uuid'

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

  getAllProjects() {
    return 'getting it all'
  }

  getOneProject() {
    return 'Here is your one project'
  }

  async createProject(createProjectDto: CreateProjectDto) {
    const newProject = this.repo.create({
      id: uuid(),
      ...createProjectDto,
    })

    return await this.repo.save(newProject)
  }

  updateProject() {
    return 'updating a project'
  }

  deleteProject() {
    return 'deleted'
  }
}
