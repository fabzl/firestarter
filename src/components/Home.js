import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import VideoHome from './VideoHome';
import Box from './Box';
// import { data } from '../data';

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex: 1;
//   flex-wrap: wrap;
// `;

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

class Home extends Component {
  renderBoxes = () => {
    // const {
    //   avatar_picture: { url },
    //   nombre_del_proyecto,
    //   cliente
    // } = this.props.data[0].acf;
    // return <Box image={url} title={nombre_del_proyecto} client={cliente} />;

    return this.props.data.map((item, key) => {
      // Si no existe acf implementado
      if (!item.acf.avatar_picture) return null;
      const {
        avatar_picture: { url },
        nombre_del_proyecto,
        cliente
      } = item.acf;
      return (
        <Box
          key={item.id}
          image={url}
          title={nombre_del_proyecto}
          client={cliente}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <VideoHome />
        <Grid>{this.renderBoxes()}</Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    data: state.data.data
  };
};

export default connect(mapStateToProps)(Home);
