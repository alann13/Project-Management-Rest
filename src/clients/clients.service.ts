import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Client } from './client.entity'
import { CreateClientDto } from './dto/create-client.dto'

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client) private repo: Repository<Client>) {}

  createClient(createClientDto: CreateClientDto) {
    console.log(createClientDto)
  }
}
