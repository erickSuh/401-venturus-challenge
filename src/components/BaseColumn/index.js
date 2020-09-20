import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function BaseColumn({ style, children, className }) {
  return <Container className={className} style={style}>{children}</Container>;
}

BaseColumn.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default BaseColumn;
