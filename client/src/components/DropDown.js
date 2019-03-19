import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

import { sortPosts } from '../actions'

const DropDownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const DropDownContainer = styled.div`
    height: 100px;
    width: 300px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
`

const DropDownContent = styled.div`
    height: 100px;
    width: 300px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
`

class DropDown extends Component {
    state = {
        dropdownToggled: false
    }

    handleToggle = () => {
        this.setState({
            dropdownToggled: !this.state.dropdownToggled
        })    
    }

    handleSort = e => {
        this.props.sortPosts(e.target.id)
    }
    
    render() {
    return (
      <DropDownWrapper>
        <DropDownContainer
        onClick={this.handleToggle}
        >
            <h2>Sort By</h2>
            
        </DropDownContainer>
        {this.state.dropdownToggled && (
            <DropDownContent>
                <p 
                onClick={this.handleSort}
                id="title"
                >Title</p>
                <p
                id="contents"
                onClick={this.handleSort}
                >Created By</p>
            </DropDownContent>)}
      </DropDownWrapper>
    )
  }
}

export default connect(
    null,
    { sortPosts }
)(DropDown)