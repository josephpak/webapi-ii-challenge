import axios from "axios";
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,

  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,

  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,

  UPDATE_POST_START,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,

  SORT_POSTS_START,
  SORT_POSTS_SUCCESS,
  SORT_POSTS_FAILURE,
} from "../types";

// Action creator function that uses thunk
export const fetchPosts = () => dispatch => {
  dispatch({ 
    type: FETCH_POSTS_START 
  });
  
  axios
    .get("http://localhost:4000/api/posts")
    .then(res => {
      dispatch({ 
        type: FETCH_POSTS_SUCCESS, 
        payload: res.data 
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: err.data });
    });
};

export const deletePost = postId => dispatch => {
  dispatch({
		type: DELETE_POST_START
  });
  
  axios
		.delete(`http://localhost:4000/api/posts/${postId}`)
		.then(res => {
			dispatch({
				type: DELETE_POST_SUCCESS,
				payload: postId
			});
		})
		.catch(err => {
			dispatch({
				type: DELETE_POST_FAILURE,
				payload: err
			});
		});
}

export const updatePost = (post, postId) => dispatch => {
  dispatch({
		type: UPDATE_POST_START
  });
  
  axios
		.put(`http://localhost:4000/api/posts/${postId}`, post)
		.then(res => {
			dispatch({
				type: UPDATE_POST_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: UPDATE_POST_FAILURE,
				payload: err
			});
		});
}

export const createPost = post =>  dispatch => {
  dispatch({
    type: CREATE_POST_START
  });

  axios
    .post('http://localhost:4000/api/posts', post)
    .then(res => {
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
			dispatch({
				type: CREATE_POST_FAILURE,
				payload: err
			});
		});
}

export const sortPosts = sortParam => dispatch => {
  dispatch({
    type: SORT_POSTS_START
  })

  // const param = JSON.parse(sortParam)

  axios
    .get(`http://localhost:4000/api/posts?sortby=${sortParam}`)
    .then(res => {
      dispatch({
        type: SORT_POSTS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
			dispatch({
				type: SORT_POSTS_FAILURE,
				payload: err
			});
		});
}