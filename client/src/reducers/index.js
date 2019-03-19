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

const initialState = {
  posts: [],
  fetching: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        posts: action.payload  
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: "Fetch Failure",
        fetching: false
      };

    case DELETE_POST_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: state.posts.filter(post => (
          post.id !== action.payload
        )),
        error: null
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: "Delete Failure",
        fetching: false
      };

    case UPDATE_POST_START:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: state.posts.map(post =>
					post.id === action.payload.id
						? action.payload
						: post
				),
        error: null
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        error: "Update Failure",
        fetching: false
      };
      
    case CREATE_POST_START:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: action.payload,
        error: null
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: "Create Failure",
        fetching: false
      };    
  
    case SORT_POSTS_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case SORT_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        posts: action.payload  
      };
    case SORT_POSTS_FAILURE:
      return {
        ...state,
        error: "Sort Failure",
        fetching: false
      };  
      
    default:
      return state;
  }
};