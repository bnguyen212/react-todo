import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "1"}
  }

  change(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return(
      <div>
        <select onChange={(e) => this.change(e)} value={this.state.value}>
          <option value="1">All</option>
          <option value="2">Completed</option>
          <option value="3">Incomplete</option>
        </select>
        <button onClick={() => this.props.filter(this.state.value)}>Filter</button>
      </div>
    )
  }
}