import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { playVideo } from '../redux/actions';
import { withRouter } from 'react-router';

const Wrap = styled.div`
  position: relative;
  width: ${props => (props.large ? 200 / 3 : 100 / 3)}%; 
  /* flex: ${props => (props.large ? 2 : 1)}; */
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  background: rgba(0, 1, 40, 0.85);
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  user-select: none;
  opacity: ${props => (props.hover ? 1 : 0)};
  color: #fff;

  &::before,
  &&::after {
    content: '';
    display: block;
    width: 0;
    border-top: 1px solid #fff;
    transition: width 0.3s, left 0.4s, right 0.4s;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    width: ${props => (!props.hover ? 0 : props.large ? 70 : 40)}px;
  }

  &::before {
    left: ${props =>
      props.hover
        ? props.large ? '200px' : '60px'
        : props.large ? '60px' : '50%'};
  }

  &::after {
    right: ${props =>
      props.hover
        ? props.large ? '200px' : '60px'
        : props.large ? '60px' : '50%'};
  }
`;

const Middle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: none;
  margin-top: -3em;

  h4 {
    margin: 0 0 10px;
    font-size: 21px;
    font-weight: 500;
    text-transform: uppercase;
    font-style: italic;
  }

  h3 {
    font-size: 42px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    color: #e70895;
    padding: 0.33em 10px 5px;
    margin: 0;
    line-height: 1em;
  }
`;

const H4 = styled.h4`
  transition: transform 0.8s, opacity 1.2s;
  transition-timing-function: cubic-bezier(0.1, 0.1, 0.2, 1), ease;
  opacity: ${props => (props.hover ? 1 : 0)};
  transform: translateX(${props => (props.hover ? 0 : '-200px')});
`;

const preH3 = H4.withComponent('h3');

const H3 = preH3.extend`
  transform: translateX(${props => (props.hover ? 0 : '200px')});
`;

class Box extends Component {
  state = {
    hover: false
  };

  hoverTrue = () => {
    if (!this.state.hover) {
      this.setState({ hover: true });
    }
  };

  hoverFalse = () => {
    if (this.state.hover) {
      this.setState({ hover: false });
    }
  };

  redirect = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Wrap
        large={this.props.large}
        onMouseEnter={() => this.hoverTrue()}
        onMouseLeave={() => this.hoverFalse()}
        onClick={!this.props.link ? this.props.playVideo : this.redirect}
      >
        <Img src={this.props.image} />
        <Content hover={this.state.hover} large={this.props.large}>
          <Middle>
            <H4 hover={this.state.hover}>Test 2</H4>
            <H3 hover={this.state.hover}>Test 1</H3>
          </Middle>
        </Content>
      </Wrap>
    );
  }
}

export default withRouter(connect(null, { playVideo })(Box));
