import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { CreateProjectDto } from './dto/create-project.dto'

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getAllProjects() {
    return this.projectsService.getAllProjects()
  }

  @Get(':id')
  getOneProject() {
    return this.projectsService.getOneProject()
  }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.createProject(createProjectDto)
  }

  @Put(':id')
  updateProject() {
    return this.projectsService.updateProject()
  }

  @Delete(':id')
  deleteProject() {
    return this.projectsService.deleteProject()
  }
}
