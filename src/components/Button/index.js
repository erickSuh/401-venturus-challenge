import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({
  label, disabled, onClick, children,
}) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      {label}
      {children}
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

Button.defaultProp = {
  disabled: false,
};

export default Button;
