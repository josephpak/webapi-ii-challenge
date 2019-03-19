import React, { Component } from 'react'
import Card from './Card'

class List extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
            <Card {...post} key={post.id}/>
        ))}
      </div>
    )
  }
}

export default List;