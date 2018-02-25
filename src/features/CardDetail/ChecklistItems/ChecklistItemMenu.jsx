import React from 'react'
import { OptionsMenu } from 'common/components'

const ChecklistItemMenu = (props) => {
  const { deactivate } = props
  return (
    <OptionsMenu
      title="Item Actions"
      deactivate={deactivate}
    >
      <div>Yay</div>
    </OptionsMenu>
  )
}

export default ChecklistItemMenu
