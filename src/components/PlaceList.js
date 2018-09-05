import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const placeList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} onItemPressed={() => alert('Item pressed - ID: ' + i)} />
    ));
    return (
      <View style={styles.listContainer}>
        {placesOutput}
      </View>
    );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
})

placeList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired
}

export default placeList;