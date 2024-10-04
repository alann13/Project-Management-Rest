import { Body, Controller, Post } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { CreateClientDto } from './dto/create-client.dto'

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    this.clientService.createClient(createClientDto)
  }
}
