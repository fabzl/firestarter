import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

const MainImage = styled.div`
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

const Playd = styled.a`
  margin-top: 15px;
  text-indent: -9999px;
  color: transparent;
  display: block;
  font-size: 140px;
  height: 1em;
  width: 1em;
  line-height: 1em;
  margin: 0 auto;
  overflow: hidden;
  z-index: 10;
  &::before {
    font: normal normal normal 14px/1 'icons';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: '\e90a';
    display: block;
    text-indent: 0;
    color: #fff;
    margin: 50% auto;
    top: 1px;
    transform: translate(0, -50%);
  }
`;

const Play = styled.span`
  &:hover {
    opacity: 0.8;
  }
`;

const BaseArrow = styled.a`
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
`;

const Right = BaseArrow.extend`
  right: 0;
  text-align: right;
`;

const Arrow = styled.span`
  right: 0;
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
  &:hover {
    transition-delay: 0s;
    ${props => (props.right ? 'right: 10px' : 'left: 10px')};
  }
`;

const ShowWork = props => {
  // Chequear item
  const { link } = props.match.params;
  const key = props.data.map(element => element.link).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const item = props.data[key];

  return (
    <MainImage>
      <TextCenter>
        <H1>{item.title}</H1>
        <Play>
          <i className="far fa-play-circle fa-10x" />
        </Play>
      </TextCenter>
      <Img src={item.fullImage} alt="full-image" />

      <Left>
        <Arrow>
          <i className="fas fa-chevron-left" />
        </Arrow>
      </Left>

      <Right>
        <Arrow right>
          <i className="fas fa-chevron-right" />
        </Arrow>
      </Right>
    </MainImage>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

export default connect(mapStateToProps)(ShowWork);
