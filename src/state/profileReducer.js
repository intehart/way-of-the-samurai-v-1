import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'It\'s my first post'},
    {id: 3, message: 'Hi yo'}
  ],
  newPostText: 'Введи сообщение',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5, message: text}]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST}),
  updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }),
  setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
  }),
  setStatus = (status) => ({
    type: SET_STATUS, status
  });


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(res => {
      dispatch(setUserProfile(res.data));
    });
  },
  getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(res => {
      dispatch(setStatus(res.data));
    });
  },
  updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };

  export
default
profileReducer;