import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deletePost, updatePost } from '../actions'

const CardWrapper = styled.div`
    height: 100px;
    width: 300px;
    margin: 15px 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 10px;
`

class Card extends Component {
    state = {
        post: {
            title: this.props.title,
            contents: this.props.contents
        },
        isEditing: false
    }

    handleEdit = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
  
    handleDelete = e => {
        e.preventDefault();
        this.props.deletePost(this.props.id)
    }

    handleChanges = e => {
		this.setState({
			post: {
				...this.state.post,
				[e.target.name]: e.target.value
			}
		});
    };
    
    handleUpdate = e => {
        this.props.updatePost(this.state.post, this.props.id)
        this.setState({
			isEditing: !this.state.isEditing
		});
    } 

    render() {
    return (
      <CardWrapper>
        {!this.state.isEditing ? (
            <>
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.contents}</p>
            </div>
            <div>
                <button
                onClick={this.handleDelete}
                >Delete</button>
                <button 
                onClick={this.handleEdit}
                >Edit</button>
            </div>
            </>
        ) : (
            <>
            <div>
                <input
                    type="text"
                    name="title"
                    value={this.state.post.title}
                    placeholder="Title"
                    onChange={this.handleChanges}
                />
                <input
                    type="text"
                    name="contents"
                    value={this.state.post.contents}
                    placeholder="Contents"
                    onChange={this.handleChanges}
                />
            </div>
            <div>
                <button
                onClick={this.handleUpdate}
                >Update</button>
                <button
                onClick={this.handleEdit}
                >Cancel</button>
            </div>
            </>
        )}
      </CardWrapper>
    )
  }
}

export default connect(
    null,
    { deletePost, updatePost }
)(Card);