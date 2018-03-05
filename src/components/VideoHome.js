import React, { Fragment } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  z-index: 0;
  padding: 80px 40px 40px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  display: block;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  width: 100%;
  min-width: 178vh;
  transform: translate(-50%, -50%) translateZ(0);
  z-index: 0;
`;

const Text = styled.div`
  z-index: 20;
  padding: 40px 80px;
  transform: translate(0, -50%);
  top: 50%;
  pointer-events: none;
  /* opacity: 0; */
  transition: opacity 1.3s;
  width: 93.3333%;
  max-width: 1600px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 122px;
  line-height: 0.9em;
  margin: 0 auto;
  padding: 0 20px;
  transform: translateX(-1px);
  display: inline-block;
  transition: line-height 1s;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-align: center;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 0;
    border-top: 1px solid #fff;
    transition: width 0.6s 0.2s, left 0.6s 0.2s, right 0.6s 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    position: absolute;
    top: 50%;
    margin-top: -15px;
    transform: translateZ(0);
    width: 70px;
  }

  &::before {
    left: -70px;
  }

  &::after {
    right: -70px;
  }
`;

export default () => (
  <Fragment>
    <Section>
      <Text>
        <H2>Where imagination meets reality</H2>
      </Text>
      <Video autoPlay muted loop>
        <source src="video/videoIntro03.mp4" type="video/mp4" />
      </Video>
    </Section>
  </Fragment>
);
