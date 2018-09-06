import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlaces) {
    modalContent = (
      <View>
        <Image source={props.selectedPlaces.image} style={styles.placeImage} />
        <Text style={styles.placeName}>
          {props.selectedPlaces.name}
        </Text>
      </View>
    )
  }

  return (
    <Modal
      visible={props.selectedPlaces !== null}
      animationType="slide"
      onRequestClose={props.onModalClose}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.button}>
              <Icon
                size={30}
                name="ios-trash"
                color="red"
                />
            </View>
          </TouchableOpacity>
            <Button
              title="Delete"
              color="red"
              onPress={props.onItemDeleted}
              />
          <Button
            title="Close"
            style={styles.button}
            onPress={props.onModalClose}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginRight: 10
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 26,
  }
})

placeDetail.propTypes = {
  selectedPlaces: PropTypes.instanceOf(Object),
  onItemDeleted: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
}
export default placeDetail;