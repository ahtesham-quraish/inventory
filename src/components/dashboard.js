import React, { Component } from 'react';
import ContentWrapper from './contentWrapper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {
  componentDidMount = () => {
    toast('Wow so easy !');
  };
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>sdjkhkjahsfkjahfk</ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Dashboard;
