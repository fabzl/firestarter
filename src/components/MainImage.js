import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { playVideo } from '../redux/actions';

const Wrap = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  display: block;
`;

const Img = styled.img`
  z-index: 0;
  opacity: 1;
  transition: opacity 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
`;

const TextCenter = styled.div`
  margin: -40px auto 0;
  top: 45vh;
  max-width: 720px;
  padding: 20px;
  z-index: 10;
  transform: translate(0, -50%);
  text-align: center;
  color: #fff;
`;

const H1 = styled.h1`
  margin-bottom: 0;
  font-size: 62px;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  margin: 0 auto 0.6em;
  text-align: center;
`;

const Play = styled.span`
  &:hover {
    opacity: 0.8;
  }
`;

const BaseArrow = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  width: 10%;
  color: transparent;
  text-decoration: none;
  font-size: 62px;
  z-index: 20;
`;

const Left = BaseArrow.extend`
  left: 0;
  text-align: left;
  span {
    left: 5px;
  }
  &:hover span {
    left: 10px;
  }
`;

const Right = BaseArrow.extend`
  right: 0;
  text-align: right;
  span {
    right: 5px;
  }
  &:hover span {
    right: 10px;
  }
`;

const Arrow = styled.span`
  transition: all 0.3s 0.2s;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  top: 45%;
  margin-top: -30px;
  vertical-align: top;
  color: #fff;
  z-index: 5;
`;

const MainImage = props => (
  <Wrap>
    <TextCenter>
      <H1>{props.nombre_del_proyecto}</H1>
      <Play onClick={props.playVideo}>
        <i className="far fa-play-circle fa-10x" />
      </Play>
    </TextCenter>
    <Img src={props.url} alt="full-image" />

    <Left to={`/work/${props.prevLink}`}>
      <Arrow>
        <i className="fas fa-chevron-left" />
      </Arrow>
    </Left>

    <Right to={`/work/${props.nextLink}`}>
      <Arrow>
        <i className="fas fa-chevron-right" />
      </Arrow>
    </Right>
  </Wrap>
);

export default connect(null, { playVideo })(MainImage);
