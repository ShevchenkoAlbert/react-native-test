import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';

export default class App extends Component {
  state = {
    places: [],
  }

  onChange = (value) => {
    this.setState({ text: value })
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    const { places } = this.state;
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={places} />
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
