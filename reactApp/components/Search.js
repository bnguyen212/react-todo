import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
  }

  change(e) {
    this.setState({input: e.target.value})
  }

  render() {
    return(
      <div>
        <input onChange={e => this.change(e)} value={this.state.input}/>
        <button onClick={() => this.props.search(this.state.input)}>Search</button>
      </div>
    )
  }
}