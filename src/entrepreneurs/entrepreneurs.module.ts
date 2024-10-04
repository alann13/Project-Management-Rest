import { Module } from '@nestjs/common'
import { EntrepreneursController } from './entrepreneurs.controller'
import { EntrepreneursService } from './entrepreneurs.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Entrepreneur } from './entrepreneur.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Entrepreneur])],
  controllers: [EntrepreneursController],
  providers: [EntrepreneursService],
})
export class EntrepreneursModule {}
