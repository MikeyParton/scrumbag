import { keyframes } from 'styled-components'
import { fadeIn, headShake } from 'react-animations'

export const fadeInAnimation = keyframes`${fadeIn}`
export const headShakeAnimation = keyframes`${headShake}`

export const pulseAnimation1 = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`

export const pulseAnimation2 = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.81); }
  100% { transform: scale(1); }
`

export const rotateAnimation = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
