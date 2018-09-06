import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';

const listItem = (props) => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        source={props.placeImage}
        style={styles.placeImage}
        resizeMode="cover"
      />
      <Text>
        {props.placeName}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

listItem.propTypes = {
  onItemPressed: PropTypes.func.isRequired,
  placeName: PropTypes.string.isRequired,
  placeImage: PropTypes.number.isRequired,
}
export default listItem;