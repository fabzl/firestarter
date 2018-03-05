import React from 'react';
import styled from 'styled-components';
import logo from './logo_loader.svg';
// @keyframes fadeOutCurtain {
// 	from {
// 		opacity: 1;

// 	}
// 	to {
// 		opacity: 0;
// 	}

// }

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-high+1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 100vw;
  height: 100vh;
  background: $mwhite;
  align-items: center;
  /* &.animation {
		animation: fadeOutCurtain 1.2s ease-out;
	} */

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    grid-column: 2 / 2;
    grid-row: 2 / 2;

    flex-grow: 2;
    display: flex;
    align-self: center;
  }
`;

export default () => (
  <Loader>
    <img src={logo} alt="loader" />
  </Loader>
);
