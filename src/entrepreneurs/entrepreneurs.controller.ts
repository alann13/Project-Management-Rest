import { Body, Controller, Post } from '@nestjs/common'
import { EntrepreneursService } from './entrepreneurs.service'
import { CreateEntrepreneurDto } from './dto/create-entrepreneur.dto'

@Controller('entrepreneurs')
export class EntrepreneursController {
  constructor(private entrepreneurService: EntrepreneursService) {}

  @Post()
  createClient(@Body() createEntrepreneurDto: CreateEntrepreneurDto) {
    this.entrepreneurService.createEntrepreneur(createEntrepreneurDto)
  }
}
