import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SimpleList({ header, list }) {
  const RenderList = useCallback(() => (
    list.map((item) => (
      <li>
        <span>{item.name}</span>
        <span><b>{item.avg}</b></span>
      </li>
    ))
  ), [list]);

  return (
    <Container>
      <h3>{header}</h3>
      <ul>
        <RenderList />
      </ul>
    </Container>
  );
}

SimpleList.propTypes = {
  header: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avg: PropTypes.string,
    }),
  ),
};

export default SimpleList;
