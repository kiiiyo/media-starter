export type Id = number

export interface Entity {
  readonly id: Id
  readonly title?: string
  readonly slug?: string
  readonly description?: string
  readonly updated_at?: string
  readonly created_at?: string
}

export interface Interface extends Entity {
  readonly articles: any[] // FIXME
}
