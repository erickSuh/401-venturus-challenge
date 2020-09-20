import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function BaseLayout({ style, children, className }) {
  return <Container className={className} style={style}>{children}</Container>;
}

BaseLayout.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default BaseLayout;
