import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class ContractionBox extends React.Component {
  static propTypes = {
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'left'
  }

  constructor (props) {
    super()
    this.state = {}
  }

  render () {
    const { wrapClassName } = this.props
    return (
      <div className={wrapClassName}>
        {
          this.props.children
        }
        {
          this.props.controlNode
        }
      </div>
    )
  }
}

export default ContractionBox
