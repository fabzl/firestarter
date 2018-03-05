import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import Work from './components/Work';
import Header from './components/Header';
import ShowWork from './components/ShowWork';
import Loader from './components/Loader';

import { fetchData } from './redux/actions';

const Overlay = styled.div`
  &::before {
    opacity: ${props => (props.showVideo ? 0.92 : 0)};
    content: '';
    display: block;
    transition: opacity 0.3s;
    pointer-events: none;
    position: fixed;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background: #000;
    top: 0;
  }
  ${props => props.showVideo && 'position: fixed;'};
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
    // setTimeout(() => {
    //   this.props.fetchData();
    // }, 3000);
  }

  render() {
    if (this.props.data.data.length === 0) return <Loader />;
    return (
      <Router>
        <Overlay showVideo={this.props.showVideo}>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />

          <Route exact path="/work/:link" component={ShowWork} />
        </Overlay>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    data: state.data
  };
};

export default connect(mapStateToProps, { fetchData })(App);
