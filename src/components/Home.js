import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import VideoPlayer from './VideoPlayer';
import VideoHome from './VideoHome';
import Box from './Box';
import { data } from '../data';
import { stopVideo } from '../redux/actions';

const Main = styled.div`
  min-height: calc(100vh - 130px);
  z-index: 100;
  display: block;
  width: 100%;
  ${props => props.showVideo && `top: -${window.scrollY}px;`};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

class Home extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showVideo && !this.props.showVideo)
      window.scrollTo(0, prevProps.scrollY);
  }

  renderBoxes = () => {
    let large = false;
    return data.map((item, key) => {
      if (key % 2) large = !large;
      return <Box key={item.id} image={item.image} large={large} />;
    });
  };

  render() {
    return (
      <div>
        <Main showVideo={this.props.showVideo}>
          <VideoHome />

          <Row>{this.renderBoxes()}</Row>
        </Main>

        <VideoPlayer
          showVideo={this.props.showVideo}
          closeVideo={this.props.stopVideo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    scrollY: state.video.scrollY
  };
};

export default connect(mapStateToProps, { stopVideo })(Home);
