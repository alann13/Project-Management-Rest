import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { CreateClientDto } from './dto/create-client.dto'

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Get(':id')
  findClient(@Param('id') id: string) {
    return this.clientService.findClient(id)
  }

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    this.clientService.createClient(createClientDto)
  }
}
