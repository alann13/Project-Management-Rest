import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Entrepreneur } from './entrepreneur.entity'
import { Repository } from 'typeorm'
import { CreateClientDto } from 'src/clients/dto/create-client.dto'
import { v4 as uuid } from 'uuid'

@Injectable()
export class EntrepreneursService {
  constructor(@InjectRepository(Entrepreneur) private repo: Repository<Entrepreneur>) {}

  createEntrepreneur(createEntrepreneurDto: CreateClientDto) {
    const newEntrepreneur = this.repo.create({
      id: uuid(),
      ...createEntrepreneurDto,
    })

    return this.repo.save(newEntrepreneur)
  }

  async findEntrepreneur(id: string) {
    try {
      const existingEntrepreneur = this.repo.findOneBy({
        id,
      })

      if (!existingEntrepreneur) {
        throw new Error()
      }

      return existingEntrepreneur
    } catch (e) {
      console.error(e)
    }
  }
}
