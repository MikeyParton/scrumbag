import React from 'react'
import * as moment from 'moment'
import { Flex } from 'grid-styled'
import PlayPause from 'features/BoardDetail/Drawer/DrawerButton'
import withTimer from 'features/Timers/withTimer'

class Timer extends React.Component {
  state = {
    interval: null,
    display: null
  }

  componentDidMount() {
    this.tick()
    if (this.isActive()) {
      this.startTick()
    }
  }

  componentWillUnmount() {
    this.stopTick()
  }

  isActive = () => {
    const { status } = this.props.timer
    return status === "started"
  }

  tick = () => {
    const { status, seconds, startedAt } = this.props.timer
    let secondsDiff = seconds

    if (this.isActive()) {
      const from = moment(startedAt)
      const to = moment()

      secondsDiff += to.diff(from, 'seconds')
    }

    const hours = Math.floor(secondsDiff / 3600)
    let mins = Math.floor(secondsDiff / 60) % 60

    if (mins < 10) {
      mins = `0${mins}`
    }

    const display = `${hours}:${mins}`

    if (display !== this.state.display) {
      this.setState({ display })
    }
  }

  startTick = () => {
    const interval = setInterval(this.tick, 1000)
    this.setState({ interval })
  }

  stopTick = () => {
    clearInterval(this.state.interval)
  }

  start = () => {
    const { startTimer } = this.props
    this.startTick()
    startTimer()
  }

  stop = () => {
    const { stopTimer } = this.props
    this.stopTick()
    stopTimer()
  }

  render() {
    const { display } = this.state
    const { timer } = this.props
    const { startedAt, seconds, status } = timer

    return (
      <Flex align="center">
        <PlayPause
          active={this.isActive()}
          onActivate={this.start}
          onDeactivate={this.stop}
        />
        <div>{display}</div>
      </Flex>
    )
  }
}

export default withTimer(Timer)
