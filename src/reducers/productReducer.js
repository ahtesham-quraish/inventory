import {
  ADD_FETCHED_PRODUCT,
  APPEND_POSTED_PRODUCT,
  TOGGLE_PRODUCT_LOADER,
  APPEND_POSTED_PRODUCT_SUCCESS,
  APPEND_POSTED_PRODUCT_ERROR,
} from '../variables';

const initialState = {
  product: [],
  loading: false,
  success: false,
  error: false,
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FETCHED_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload),
      };
    case APPEND_POSTED_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload),
      };
    case TOGGLE_PRODUCT_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    case APPEND_POSTED_PRODUCT_SUCCESS:
      console.log('toggle success apend');
      return {
        ...state,
        success: !state.success,
      };
    case APPEND_POSTED_PRODUCT_ERROR:
      return {
        ...state,
        error: !state.error,
      };
    default:
      return state;
  }
}
