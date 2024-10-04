import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Entrepreneur } from './entrepreneur.entity'
import { Repository } from 'typeorm'
import { CreateClientDto } from 'src/clients/dto/create-client.dto'

@Injectable()
export class EntrepreneursService {
  constructor(@InjectRepository(Entrepreneur) private repo: Repository<Entrepreneur>) {}

  createEntrepreneur(createEntrepreneurDto: CreateClientDto) {
    console.log(createEntrepreneurDto)
  }
}
