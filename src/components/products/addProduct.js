import React from 'react';
import ContentWrapper from '../contentWrapper';
import InputField from '../common/FormElements/inputField';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  componentWillMount = () => {
    axios.get('http://127.0.0.1:8000/product/');
  };
  resetState = () => {
    this.setState({
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

  handleSave = () => {
    if (this.validateFormData() === false) {
      return;
    }
    this.setState({
      waiting: true,
    });
    //submit formdata if valid
    let payload = {
      title: this.state.title,
      description: this.state.description,
      size: this.state.size,
      brand: this.state.brand,
      unit: this.state.units,
    };
    let options = { 'Content-Type': 'application/json' };

    fetch('http://127.0.0.1:8000/product/', {
      method: 'post',
      headers: options,
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        toast.success('Product added successfully!');
        this.resetState();
      });
  };

  validateFormData = () => {
    let isValid = true;

    if (this.state.title === '') {
      this.setState({
        titleError: true,
        titleErrorMsg: 'Product title is required',
      });
      isValid = false;
    }
    if (this.state.description === '') {
      this.setState({
        descriptionError: true,
        descriptionErrorMsg: 'Product description is required',
      });
      isValid = false;
    }
    if (this.state.size === '') {
      this.setState({
        sizeError: true,
        sizeErrorMsg: 'Product size is required',
      });
      isValid = false;
    }
    if (this.state.brand === '') {
      this.setState({
        brandError: true,
        brandErrorMsg: 'Product brand is required',
      });
      isValid = false;
    }
    if (this.state.units === '') {
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
                    id="prod-title"
                    value={this.state.title}
                    type="text"
                    placeholder="Enter Tile"
                    onChange={(e) => {
                      this.setState({
                        title: e.target.value,
                        titleError: false,
                      });
                    }}
                  />
                </div>
                <div class="col-md-6">
                  <InputField
                    label="Description"
                    id="prod-description"
                    type="textarea"
                    value={this.state.description}
                    error={this.state.descriptionError}
                    helpText={this.state.descriptionErrorMsg}
                    placeholder="Enter Description"
                    onChange={(e) => {
                      this.setState({
                        description: e.target.value,
                        descriptionError: false,
                      });
                    }}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField
                    label="Size"
                    id="prod-size"
                    type="number"
                    value={this.state.size}
                    placeholder="Enter Size"
                    error={this.state.sizeError}
                    helpText={this.state.sizeErrorMsg}
                    onChange={(e) => {
                      this.setState({ size: e.target.value, sizeError: false });
                    }}
                  />
                </div>
                <div class="col-md-6">
                  <InputField
                    label="Brand"
                    id="prod-brand"
                    value={this.state.brand}
                    type="text"
                    placeholder="Enter Brand"
                    error={this.state.brandError}
                    helpText={this.state.brandErrorMsg}
                    onChange={(e) => {
                      this.setState({
                        brand: e.target.value,
                        brandError: false,
                      });
                    }}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <InputField
                    label="Units"
                    id="prod-units"
                    type="number"
                    value={this.state.units}
                    placeholder="Enter Number of units"
                    error={this.state.unitError}
                    helpText={this.state.unitErrorMsg}
                    onChange={(e) => {
                      this.setState({
                        units: e.target.value,
                        unitError: false,
                      });
                    }}
                  />
                </div>
              </div>
              {this.state.waiting === true ? (
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
              <button type="button" class="btn btn-warning mr-1">
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

export default AddProduct;
