import { ADD_PLACE, DELETE_PLACE, SELECTED_PLACE, DESELECTED_PLACE } from '../../constants/actionType';
import placeImage from '../../assets/beautiful-place.jpg';

const initialState = {
  places: [],
  selectedPlaces: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.payload,
          image: placeImage
        })
      }
    }
    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlaces.key;
        }),
        selectedPlaces: null
      }
    }
    case SELECTED_PLACE: {
      return {
        ...state,
        selectedPlaces: state.places.find(place => {
          return place.key === action.payload
        })
      };
    }
    case DESELECTED_PLACE: {
      return {
        ...state,
        selectedPlaces: null
      }
    }
    default:
    return state;
  }
  }
