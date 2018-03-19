import { schema } from 'normalizr'

export const timerSchema = new schema.Entity('timers')
export const timersSchema = { timers: [timerSchema] }
