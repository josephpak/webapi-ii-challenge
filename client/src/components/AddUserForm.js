import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { createPost } from "../actions"

const FormWrapper = styled.div`
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

class AddUserForm extends Component {
    state = {
        post: {
            title: "",
            contents: ""
        }
    }

    handleChanges = e => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value
            }
        });
    };

    handleCreate = e => {
        this.props.createPost(this.state.post)
        this.setState({
            post: {
                title: '',
                contents: ''
            }
        })
    }
  
    render() {
        return (
            <FormWrapper>
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
                onClick={this.handleCreate}
                >Create</button>
            </div>
            </FormWrapper>
        )
  }
}

export default connect(
    null,
    { createPost }
)(AddUserForm);