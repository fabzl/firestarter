import React from 'react';
import styled from 'styled-components';

import { works } from '../data';
import Box from './Box';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

const Work = () => (
  <Row>
    {works.map((item, key) => <Box key={item.id} image={item.image} link />)}
  </Row>
);

export default Work;
