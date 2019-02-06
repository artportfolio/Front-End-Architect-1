import {
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../actions";

const initialState = {
  photos: [],
  loggedIn: false
};

const parsePhotos = photoData => {
  return photoData.photos.map(photo => ({
    id: photo.id,
    photographer: photo.photographer,
    original: photo.src.original,
    square: photo.src.square
  }));
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: parsePhotos(action.payload)
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };

    default:
      return state;
  }
};

export default photos;
