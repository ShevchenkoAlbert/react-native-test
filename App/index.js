import { connect } from 'react-redux';
import App from './Component';
import {
  addPlace,
  deletePlace,
  selectedPlace,
  deselectPlace
} from '../src/store/actions/places';

const mapStateToProps = state => {
  console.log(1, state);
  return {
    places: state.placeReducer.places,
    selectedPlaces: state.placeReducer.selectedPlaces,
  }
}

const mapDispatchToProps = dispatch => ({
  addPlace: value => dispatch(addPlace(value)),
  deletePlace: () => dispatch(deletePlace()),
  selectedPlace: value => dispatch(selectedPlace(value)),
  deselectPlace: () => dispatch(deselectPlace())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)