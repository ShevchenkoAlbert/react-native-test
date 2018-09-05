import React from 'react';
import { Modal, View, Image, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const placeDetail = props => (
  <Modal>
    <View>
      <Image source={props.placeImage}/>
      <Text>
        {props.placeName}
      </Text>
        <View>
          <Button />
          <Button />
        </View>
    </View>
  </Modal>
)

placeDetail.propTypes = {
  placeName: PropTypes.string.isRequired,
  placeImage: PropTypes.string.isRequired,
}
export default placeDetail;