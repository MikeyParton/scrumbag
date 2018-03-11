import { schema } from 'normalizr'

export const labelSchema = new schema.Entity('labels')
export const labelsSchema = { labels: [labelSchema] }
