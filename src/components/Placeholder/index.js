import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Placeholder({ height }) {
  return (
    <Container height={height}>
      Not Implemented
    </Container>
  );
}

Placeholder.propTypes = {
  height: PropTypes.number,
};

export default Placeholder;
