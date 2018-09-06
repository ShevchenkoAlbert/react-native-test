import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <View style={styles.placeButton}>
        <Button
          title="Add"
          onPress={this.placeSubmitHandler}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%",
  }
});

PlaceInput.propTypes = {
  onPlaceAdded: PropTypes.func.isRequired
}

export default PlaceInput;