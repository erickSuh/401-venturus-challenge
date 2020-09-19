import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function BaseLayout({ style, children }) {
  return <Container style={style}>{children}</Container>;
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
};

export default BaseLayout;
