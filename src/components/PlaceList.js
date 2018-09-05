import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const placeList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />
    ));
    return (
      <ScrollView style={styles.listContainer}>
        {placesOutput}
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
})

placeList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  onItemDeleted: PropTypes.func.isRequired,
}

export default placeList;