import {
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
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

    default:
      return state;
  }
};

export default photos;
