import React, { Component } from 'react'
import { Modal } from 'antd'
// import PropTypes from 'prop-types'
import './index.scss'

class Calculator extends Component {
  // static propTypes = {
  //   data: PropTypes.array.isRequired
  // }

  // static defaultProps = {
  //   data: []
  // }

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      visible: true
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  calculatorObject = {
    EvaluationScore: '系统考核规则计分',
    NewPercent: '企业新型车辆占比',
    ObjectCount: '考核对象运输总量',
    CompanyCount: '企业总数'
  }

  calculatorSymbol = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '(': '(',
    ')': ')',
    '||': '||',
    '>': '>',
    '<': '<',
    '≥': '>=',
    '≤': '<=',
    '=': '==',
    '≠': '!=',
    '&': '&&'
  }

  calculatorNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

  handleData = (str) => { // 将data转为可视界面
    // const { data, setData } = this.props
    // for (let item of data) {

    // }
    // return
  }

  render () {
    // const { handleOk, handleCancel, visible, data } = this.props
    const { visible } = this.state
    return (
      <div className='calculator-container'>
        <Modal
          title='编辑等级规则'
          visible={visible}
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <div className='input-wrap'>
              1
          </div>
        </Modal>
      </div>
    )
  }
}

export default Calculator
