import {
  ADD_FETCHED_PRODUCT,
  APPEND_POSTED_PRODUCT,
  TOGGLE_PRODUCT_LOADER,
  APPEND_POSTED_PRODUCT_SUCCESS,
  APPEND_POSTED_PRODUCT_ERROR,
} from '../../variables';
import axios from 'axios';
export function addProduct(payload) {
  console.log('action dispatched with payload ', payload);
  return (dispatch) => {
    axios.get('http://127.0.0.1:8000/product/').then((response) => {
      console.log('this is response', response);
      dispatch({
        type: ADD_FETCHED_PRODUCT,
        payload: response.data,
      });
    });
  };
}

export function postProduct(payload) {
  return (dispatch) => {
    let options = { 'Content-Type': 'application/json' };
    dispatch({
      type: TOGGLE_PRODUCT_LOADER,
    });
    axios
      .post('http://127.0.0.1:8000/product/', payload, options)
      .then((response) => {
        dispatch({
          type: ADD_FETCHED_PRODUCT,
          payload: response.data,
        });
        dispatch({
          type: TOGGLE_PRODUCT_LOADER,
        });
        dispatch({
          type: APPEND_POSTED_PRODUCT_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: TOGGLE_PRODUCT_LOADER,
        });
        dispatch({
          type: APPEND_POSTED_PRODUCT_ERROR,
        });
      });
  };
}

export function togglePostSuccess() {
  console.log('success toggle func call');
  return (dispatch) => {
    dispatch({
      type: APPEND_POSTED_PRODUCT_SUCCESS,
    });
  };
}

export function togglePostError() {
  return (dispatch) => {
    dispatch({
      type: APPEND_POSTED_PRODUCT_ERROR,
    });
  };
}
