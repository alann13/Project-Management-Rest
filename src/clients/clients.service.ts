import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Client } from './client.entity'
import { CreateClientDto } from './dto/create-client.dto'
import { v4 as uuid } from 'uuid'

@Injectable()
export class ClientsService {
  constructor(@InjectRepository(Client) private repo: Repository<Client>) {}

  async createClient(createClientDto: CreateClientDto) {
    const newClient = this.repo.create({
      id: uuid(),
      ...createClientDto,
    })

    return await this.repo.save(newClient)
  }

  async findClient(id: string) {
    try {
      const client = await this.repo.findOneBy({
        id,
      })

      if (!client) {
        throw new Error('nobody')
      }

      return client
    } catch (e) {
      console.error(e)
    }
  }
}
