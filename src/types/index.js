/* @flow */

export type ListType = {
  id: number,
  title: string,
  cards: number[]
}

export type ListMap = {
  [key: string]: ListType[]
}

export type CardType = {
  id: number,
  title: string
}

export type CardMap = {
  [key: string]: CardType[]
}

export type State = {
  lists: {
    byId: {
      [key: number]: ListType
    },
    allIds: string[]
  },
  cards: {
    byId: {
      [key: number]: ListType
    },
    allIds: string[]
  }
}
