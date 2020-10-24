import React,{Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component{

  state ={
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
      this.setState({
          posts : res.data.slice(0,10)
      }
      )
    })
  }
  render(){
    const {posts} = this.state;
    const postsList = posts.length ? (posts.map((post)=>{
      return(
      <div className='post card mt-5' key={post.id}>
        <div className='card-header'>
          <Link to={'' + post.id} className='card-header-title is-centered'>
            {post.title}
          </Link>
        </div>
        <div className='card-content'>
        
        <div className='content'>{post.body}</div>
        </div>
        

        
      </div>
      )
    })):(
    
        <p>Nothing to show now</p>
    
    )
    return(
    <div className='Container mx-4 my-4'>
      {postsList}
    </div>
  )
  }
}

export default Home