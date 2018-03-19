import { schema } from 'normalizr'

export const userSchema = new schema.Entity('users')
export const labelSchema = new schema.Entity('labels')
export const checklistItemSchema = new schema.Entity('checklistItems')
export const checklistSchema = new schema.Entity('checklists', { checklistItems: [checklistItemSchema] })
export const timersSchema = new schema.Entity('timers')

export const cardSchema = new schema.Entity('cards', {
  checklists: [checklistSchema],
  users: [userSchema],
  labels: [labelSchema],
  currentTimer: timersSchema
})

export const singleChecklistSchema = { checklist: checklistSchema }

export const cardsSchema = { cards: [cardSchema] }
export const checklistItemsListSchema = { checklistItems: [checklistItemSchema] }
