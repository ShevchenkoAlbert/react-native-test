import { ADD_PLACE, DELETE_PLACE, SELECTED_PLACE, DESELECTED_PLACE } from '../../constants/actionType';

export const addPlace = payload => ({
  type: ADD_PLACE,
  payload
})

export const deletePlace = () => ({
  type: DELETE_PLACE,
})

export const selectedPlace = payload => ({
  type: SELECTED_PLACE,
  payload
})

export const deselectPlace = () => ({
  type: DESELECTED_PLACE
})
