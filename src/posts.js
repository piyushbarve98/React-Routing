import React, {Component} from 'react';
import axios from 'axios';

class Posts extends Component{
  state={
    post: null
  }
  
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id).then((res)=>{
      this.setState({
          post : res.data
      })
      
    })
  }
  render(){
    let post = this.state.post;
    let postJsx= post ? (
      <div className='post mt-6'>
      <div className='title has-text-centered'>
        {post.title}
      </div>
      <p>{post.body}</p>
      </div>
    ):(
      <div>Nothing to show here</div>
    )
    return(
      <div className='container'>
        {postJsx}
        </div>
    )
  }
}

export default Posts