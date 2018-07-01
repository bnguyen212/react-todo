import React from 'react';

export default class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''}
  }

  change(e) {
    this.setState({input: e.target.value})
  }

  submit() {
    this.state.input ? this.props.addTask(this.state.input) : alert('task is empty')
    this.setState({input: ''})
  }

  render() {
    return(
      <div>
        <input onChange={e => this.change(e)} value={this.state.input}/>
        <button onClick={() => this.submit()}>ADD</button>
      </div>
    )
  }
}