import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Box from './Box';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* grid-template-columns: 1fr 2fr; */
  /* grid-template-rows: repeat(2, 25%); */
  grid-auto-rows: 430px;
  /* grid-template-rows: repeat(2, 430px); */
  & div:last-child:nth-child(odd) {
    grid-column: 1 / 3;
  }
`;

const Work = props => (
  <Grid>
    {props.data.map((item, key) => {
      // if (!item.acf.avatar_picture) return null;
      return (
        <Box
          key={item.id}
          image={item.acf.avatar_picture.url}
          title={item.acf.nombre_del_proyecto}
          client={item.acf.cliente}
          link={item.slug}
        />
      );
    })}
  </Grid>
);

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

export default connect(mapStateToProps)(Work);
