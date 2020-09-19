import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function BaseColumn({ style, children }) {
  return <Container style={style}>{children}</Container>;
}

BaseColumn.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
};

export default BaseColumn;
