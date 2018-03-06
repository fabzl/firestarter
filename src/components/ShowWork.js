import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import MainImage from './MainImage';

const ShowWork = props => {
  // Filtrar a solamente los que tienen avatar_picture
  // const items = props.data.filter(item => item.acf.avatar_picture);
  const items = props.data;

  // Chequear item
  const { link } = props.match.params;
  const key = items.map(element => element.slug).indexOf(link);
  if (key < 0) return <Redirect to="/" />;

  const { avatar_picture: { url }, nombre_del_proyecto } = items[key].acf;

  // Sacar los Prev o nextLink
  const prevLink =
    key === 0 ? items[items.length - 1].slug : items[key - 1].slug;
  const nextLink =
    key === items.length - 1 ? items[0].slug : items[key + 1].slug;

  return (
    <div>
      <MainImage
        nombre_del_proyecto={nombre_del_proyecto}
        url={url}
        prevLink={prevLink}
        nextLink={nextLink}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

export default connect(mapStateToProps)(ShowWork);
