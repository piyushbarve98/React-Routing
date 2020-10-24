import React, {Component} from 'react';

class Posts extends Component{
  state={
    id: null
  }
  
  componentDidMount(){
    let id = this.props.match.params.post_id;
    this.setState(
      {
        id: id
      }
    )
  }
  render(){
    return(
      <div className='container'>
        <p>{this.state.id}</p>
        </div>
    )
  }
}

export default Posts