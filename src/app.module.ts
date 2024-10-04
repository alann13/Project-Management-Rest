import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProjectsModule } from './projects/projects.module'
import { ClientsModule } from './clients/clients.module'
import { EntrepreneursModule } from './entrepreneurs/entrepreneurs.module'
import { Project } from './projects/project.entity'
import { Entrepreneur } from './entrepreneurs/entrepreneur.entity'
import { Client } from './clients/client.entity'

@Module({
  imports: [
    ProjectsModule,
    ClientsModule,
    EntrepreneursModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'project-management-db',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Project, Entrepreneur, Client],
    }),
  ],
})
export class AppModule {}
