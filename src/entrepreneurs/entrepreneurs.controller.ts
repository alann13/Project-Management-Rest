import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { EntrepreneursService } from './entrepreneurs.service'
import { CreateEntrepreneurDto } from './dto/create-entrepreneur.dto'

@Controller('entrepreneurs')
export class EntrepreneursController {
  constructor(private entrepreneurService: EntrepreneursService) {}

  @Get(':id')
  findClient(@Param('id') id: string) {
    return this.entrepreneurService.findEntrepreneur(id)
  }

  @Post()
  createClient(@Body() createEntrepreneurDto: CreateEntrepreneurDto) {
    this.entrepreneurService.createEntrepreneur(createEntrepreneurDto)
  }
}
