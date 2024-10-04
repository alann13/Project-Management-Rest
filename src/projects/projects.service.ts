import { Injectable } from '@nestjs/common'
import { CreateProjectDto } from './dto/create-project.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Project } from './project.entity'

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

  getAllProjects() {
    return {
      msg: 'yoyo',
    }
  }

  getOneProject() {}

  createProject(createProjectDto: CreateProjectDto) {
    console.log(createProjectDto)
  }

  updateProject() {}

  deleteProject() {}
}
