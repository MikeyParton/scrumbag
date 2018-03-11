import { schema } from 'normalizr'

const colorSchema = new schema.Entity('colors', {}, { idAttribute: 'color' })
export const colorsSchema = { colors: [colorSchema] }
