import { Category } from '@/features/domain'

export type Id = number

export interface Entity {
  readonly id: Id
  readonly title: string
  readonly slug: string
  readonly date: string
  readonly description: string
  readonly content: string
  readonly coverImage: any //FIXME
  readonly updated_at: string
  readonly created_at: string
}

export interface Interface extends Entity {
  readonly category: Category.Entity
  readonly user: number
  readonly author: any // FIXME:
  readonly tags: any[] // FIXME:
}
