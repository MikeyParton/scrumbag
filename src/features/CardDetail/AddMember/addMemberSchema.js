import { schema } from 'normalizr'

export const userSchema = new schema.Entity('users')
export const usersSchema = { users: [userSchema] }
