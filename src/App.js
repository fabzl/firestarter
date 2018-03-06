import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import Work from './components/Work';
import Header from './components/Header';
import ShowWork from './components/ShowWork';
import Loader from './components/Loader';
import VideoPlayer from './components/VideoPlayer';

import { fetchData, stopVideo } from './redux/actions';

const Overlay = styled.div`
  width: 100%;
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

const Main = styled.div`
  min-height: calc(100vh - 130px);
  z-index: 100;
  display: block;
  width: 100%;
  ${props => props.showVideo && `top: -${window.scrollY}px;`};
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showVideo && !this.props.showVideo)
      window.scrollTo(0, prevProps.scrollY);
  }

  render() {
    if (this.props.data.data.length === 0) return <Loader />;

    return (
      <Router>
        <Overlay showVideo={this.props.showVideo}>
          <Header />

          <Main showVideo={this.props.showVideo}>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />

            <Route exact path="/work/:link" component={ShowWork} />
          </Main>

          <VideoPlayer
            showVideo={this.props.showVideo}
            closeVideo={this.props.stopVideo}
          />
        </Overlay>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    scrollY: state.video.scrollY,
    data: state.data
  };
};

export default connect(mapStateToProps, { fetchData, stopVideo })(App);
