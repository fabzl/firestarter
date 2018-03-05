import React, { Component } from 'react';
import styled from 'styled-components';
import Player from '@vimeo/player';

const Modal = styled.div`
  display: ${props => (props.showVideo ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Holder = styled.div`
  top: ${props => (props.showHolder ? 0 : '50%')};
  bottom: ${props => (props.showHolder ? 0 : '50%')};
  left: 100px;
  right: 100px;
  position: absolute;
  overflow: hidden;
  transition: top 0.5s, bottom 0.5s, opacity 0.3s;
  transition-timing-function: cubic-bezier(0.3, 0, 1, 0.3),
    cubic-bezier(0.3, 0, 1, 0.3), ease;
  z-index: 10;
  transform: translateZ(0);
  opacity: 1;
`;

const Responsive = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  max-width: 175vh;
  padding-bottom: ${props => (props.showVideo ? 56.25 : 50)}%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: translateZ(0);
  transition: left 0.3s;
`;

const Close = styled.a`
  display: inline-block;
  font: normal normal normal 14px/1 'icons';
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 2.6%;
  padding: 2px;
  font-size: 62px;
  color: #fff;
  text-decoration: none;
  margin: -26vw -0.5em 0;
  opacity: ${props => (props.showVideo ? 1 : 0)};
  transition: opacity 0.3s 0.6s;
  z-index: 20;
  &::before {
    /* content: '\e90f'; */
  }
`;

class VideoPlayer extends Component {
  state = {
    showHolder: false
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const delay = (func, ms) =>
      setTimeout(async () => {
        func();
      }, ms);

    if (!prevProps.showVideo && this.props.showVideo) {
      await delay(() => this.setState({ showHolder: true }), 300);
      await delay(() => this.player.play(), 1000);
    }
  };

  componentDidMount() {
    this.player = new Player(this.iframe);
  }

  closeVideo = async () => {
    await this.player.pause();
    this.setState({ showHolder: false });
    this.props.closeVideo();
  };

  render() {
    // src="https://player.vimeo.com/video/230218440?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;hd=1"
    return (
      <Modal showVideo={this.props.showVideo} onClick={this.closeVideo}>
        <Close showVideo={this.props.showVideo} />

        <Holder showHolder={this.state.showHolder} onClick={this.closeVideo}>
          <Responsive
            showVideo={this.state.showVideo}
            onClick={this.closeVideo}
          >
            <Iframe
              innerRef={iframe => (this.iframe = iframe)}
              src="https://player.vimeo.com/video/230218440"
            />
          </Responsive>
        </Holder>
      </Modal>
    );
  }
}

export default VideoPlayer;

// {props.showVideo && (
//   <Iframe
//     src="https://player.vimeo.com/video/230218440?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;hd=1"
//     frameborder="0"
//     webkitallowfullscreen=""
//     mozallowfullscreen=""
//     allowfullscreen=""
//     data-ready="false"
//     onLoad={() => console.log('Load')}
//   />
// )}
