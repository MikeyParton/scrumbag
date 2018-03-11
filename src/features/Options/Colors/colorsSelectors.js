import { createSelector } from 'reselect'
import { getOptions } from '../optionsSelectors'

export const getColors = createSelector(
  getOptions,
  options => options.colors
)
