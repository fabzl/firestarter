import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import VideoPlayer from './VideoPlayer';
import VideoHome from './VideoHome';
import Box from './Box';
// import { data } from '../data';
import { stopVideo } from '../redux/actions';

const Main = styled.div`
  min-height: calc(100vh - 130px);
  z-index: 100;
  display: block;
  width: 100%;
  ${props => props.showVideo && `top: -${window.scrollY}px;`};
`;

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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showVideo && !this.props.showVideo)
      window.scrollTo(0, prevProps.scrollY);
  }

  renderBoxes = () => {
    // const {
    //   avatar_picture: { url },
    //   nombre_del_proyecto,
    //   cliente
    // } = this.props.data[0].acf;
    // return <Box image={url} title={nombre_del_proyecto} client={cliente} />;

    let large = false;
    return this.props.data.map((item, key) => {
      if (key % 2) large = !large;

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
          large={large}
          title={nombre_del_proyecto}
          client={cliente}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Main showVideo={this.props.showVideo}>
          <VideoHome />

          <Grid>{this.renderBoxes()}</Grid>
        </Main>

        <VideoPlayer
          showVideo={this.props.showVideo}
          closeVideo={this.props.stopVideo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    scrollY: state.video.scrollY,
    data: state.data.data
  };
};

export default connect(mapStateToProps, { stopVideo })(Home);
