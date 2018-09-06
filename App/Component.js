import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import PlaceList from '../src/components/PlaceList';
import PlaceInput from '../src/components/PlaceInput';
import PlaceDetail from '../src/components/PlaceDetail';

export default class App extends Component {
  render() {
    const {
      places,
      selectedPlaces,
      addPlace,
      deletePlace,
      selectedPlace,
      deselectPlace
    } = this.props;
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlaces={selectedPlaces}
          onModalClose={deselectPlace}
          onItemDeleted={deletePlace}
        />
        <PlaceInput onPlaceAdded={addPlace} />
        <PlaceList places={places} onItemSelected={selectedPlace} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "70%",
  },
  button: {
    width: "30%"
  },
});

App.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  selectedPlaces: PropTypes.instanceOf(Object),
  addPlace: PropTypes.func.isRequired,
  deletePlace: PropTypes.func.isRequired,
  selectedPlace: PropTypes.func.isRequired,
  deselectPlace: PropTypes.func.isRequired,
}