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
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
