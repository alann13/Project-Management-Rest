export class CreateProjectDto {
  name: string
  description: string
  budget: number
  start_date: Date
  end_date: Date
  assigned_client: string
  assigned_entrepreneur: string
}
