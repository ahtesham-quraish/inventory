import React from 'react';
import ContentWrapper from '../contentWrapper';
import InputField from '../common/FormElements/inputField';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  addProduct,
  postProduct,
  togglePostSuccess,
  togglePostError,
} from '../actions/products';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        title: '',
        description: '',
        size: '',
        brand: '',
        unit: '',
      },
      title: '',
      titleError: false,
      titleErrorMsg: '',
      description: '',
      descriptionError: false,
      descriptionErrorMsg: '',
      size: '',
      sizeError: false,
      sizeErrorMsg: '',
      brand: '',
      brandError: false,
      brandErrorMsg: '',
      units: '',
      unitError: false,
      unitErrorMsg: '',
      waiting: false,
    };
    this.validator = new SimpleReactValidator();
  }
  componentDidMount = () => {
    this.props.addProduct({
      name: 'added from addProduct',
    });
  };

  handleStateChange = (target, value) => {
    const { payload } = this.state;
    payload[target.target.id] = target.target.value;
    this.setState({
      payload: payload,
    });
    console.log(this.state[target.target.id + 'Error']);
    // debugger;
    this.state[target.target.id + 'Error'] = false;
  };

  resetState = () => {
    this.setState({
      payload: {
        title: '',
        description: '',
        size: '',
        brand: '',
        unit: '',
      },
      title: '',
      titleError: false,
      titleErrorMsg: '',
      description: '',
      descriptionError: false,
      descriptionErrorMsg: '',
      size: '',
      sizeError: false,
      sizeErrorMsg: '',
      brand: '',
      brandError: false,
      brandErrorMsg: '',
      units: '',
      unitError: false,
      unitErrorMsg: '',
      waiting: false,
    });
  };

  componentDidUpdate = () => {
    if (this.props.success === true) {
      toast.success('Product added successfully');
      this.resetState();
      this.props.togglePostSuccess();
    }
    if (this.props.error === true) {
      toast.error('Could not add product');
      this.props.togglePostError();
    }
  };

  handleSave = () => {
    if (this.validateFormData() === false) {
      return;
    }
    this.setState({
      waiting: true,
    });
    //submit formdata if valid
    let payload = {
      title: this.state.payload.title,
      description: this.state.payload.description,
      size: this.state.payload.size,
      brand: this.state.payload.brand,
      unit: this.state.payload.unit,
    };

    this.props.postProduct(payload);
  };

  validateFormData = () => {
    let isValid = true;

    if (this.state.payload.title === '') {
      this.setState({
        titleError: true,
        titleErrorMsg: 'Product title is required',
      });
      isValid = false;
    }
    if (this.state.payload.description === '') {
      this.setState({
        descriptionError: true,
        descriptionErrorMsg: 'Product description is required',
      });
      isValid = false;
    }
    if (this.state.payload.size === '') {
      this.setState({
        sizeError: true,
        sizeErrorMsg: 'Product size is required',
      });
      isValid = false;
    }
    if (this.state.payload.brand === '') {
      this.setState({
        brandError: true,
        brandErrorMsg: 'Product brand is required',
      });
      isValid = false;
    }
    if (this.state.payload.unit === '') {
      this.setState({
        unitError: true,
        unitErrorMsg: 'Product units is required',
      });
      isValid = false;
    }
    return isValid;
  };
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <ToastContainer />
          <div id="overlay" />
          <form class="form">
            <div class="form-body">
              <h4 class="form-section">
                <i class="icon-head" /> Add Product
              </h4>
              <div class="row">
                <div class="col-md-6">
                  <InputField
                    label="Title"
                    error={this.state.titleError}
                    helpText={this.state.titleErrorMsg}
                    id="title"
                    title="title"
                    value={this.state.payload.title}
                    type="text"
                    placeholder="Enter Tile"
                    onChange={this.handleStateChange}
                  />
                </div>
                <div class="col-md-6">
                  <InputField
                    label="Description"
                    id="description"
                    type="textarea"
                    value={this.state.payload.description}
                    error={this.state.descriptionError}
                    helpText={this.state.descriptionErrorMsg}
                    placeholder="Enter Description"
                    onChange={this.handleStateChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField
                    label="Size"
                    id="size"
                    type="number"
                    value={this.state.payload.size}
                    placeholder="Enter Size"
                    error={this.state.sizeError}
                    helpText={this.state.sizeErrorMsg}
                    onChange={this.handleStateChange}
                  />
                </div>
                <div class="col-md-6">
                  <InputField
                    label="Brand"
                    id="brand"
                    value={this.state.payload.brand}
                    type="text"
                    placeholder="Enter Brand"
                    error={this.state.brandError}
                    helpText={this.state.brandErrorMsg}
                    onChange={this.handleStateChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField
                    label="Units"
                    id="unit"
                    type="number"
                    value={this.state.payload.unit}
                    placeholder="Enter Number of units"
                    error={this.state.unitError}
                    helpText={this.state.unitErrorMsg}
                    onChange={this.handleStateChange}
                  />
                </div>
              </div>
              {this.props.loading === true ? (
                <div className="loader" style={{ marginLeft: '45%' }}>
                  <Loader
                    type="Triangle"
                    color="#00BFFF"
                    height="65"
                    width="65"
                  />
                </div>
              ) : null}
            </div>

            <div class="form-actions">
              <button
                type="button"
                class="btn btn-warning mr-1"
                onClick={() => {
                  console.log(this.props);
                }}
              >
                <i class="icon-cross2" /> Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.handleSave}
              >
                <i class="icon-check2" /> Save
              </button>
            </div>
          </form>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productReducer.product,
    loading: state.productReducer.loading,
    success: state.productReducer.success,
    error: state.productReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (payload) => dispatch(addProduct(payload)),
    postProduct: (payload) => dispatch(postProduct(payload)),
    togglePostSuccess: () => dispatch(togglePostSuccess()),
    togglePostError: () => dispatch(togglePostError()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);
