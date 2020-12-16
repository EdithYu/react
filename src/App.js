import React from 'react'
import { Button, Input } from 'antd'
import './App.css';

class App extends React.Component {

  state = {
    number: 0
  }

  add = () => {
    setTimeout(() => {
      const { number } = this.state
      console.log(number)
      this.setState({
        number: number+1
      })
    },0)
  }

  reduce = async () => {
    const { number } = this.state
    console.log(number)
    this.setState({
      number: number-1
    })
  }

  other = () => {
    this.add()
    this.reduce()
  }

  render () {
    const { number } = this.state
    return (
      <div>
        <Input  value={number}/>
        <Button onClick={this.add}>
          +
        </Button>
        <Button onClick={this.reduce}>
          -
        </Button>
        <Button onClick={this.other}>
          other
        </Button>
      </div>
    )
  }
}

export default App;
