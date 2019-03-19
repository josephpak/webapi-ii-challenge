import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import styled from 'styled-components';

import List from './components/List'
import AddUserForm from './components/AddUserForm';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }
  
  render() {
    return (
      <AppWrapper>
        <AddUserForm/>
        {this.props.fetching ? (<p>Loading...</p>) : 
        (<List 
        posts={this.props.posts}
        />)}
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    fetching: state.fetching
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
