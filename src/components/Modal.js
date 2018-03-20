import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import { enableScroll, disableScroll } from '../helpers';
import { stopVideo } from '../redux/actions';

const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #000; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  /* transition: opacity 300ms ease-in-out;
  opacity: 0; */
`;

const Content = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  width: 100%;
  height: 100%; */
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ddd;
  &:hover {
    opacity: 0.5;
  }
`;

class Modal extends Component {
  componentDidMount() {
    // disableScroll();
  }

  componentWillUnmount() {
    // enableScroll();
    // window.scrollTo(0, this.props.scrollY);
  }

  render() {
    // <ReactPlayer url="https://vimeo.com/247535876" playing={true} />
    return (
      <Overlay {...this.props}>
        <Content>
          <CloseButton onClick={this.props.stopVideo}>
            <i className="fas fa-times fa-3x" />
          </CloseButton>

          <ReactPlayer
            url="https://vimeo.com/247535876"
            playing={true}
            width="90%"
            height="90%"
          />
        </Content>
      </Overlay>
    );
  }
}

export default connect(null, { stopVideo })(Modal);