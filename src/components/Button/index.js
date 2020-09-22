import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Button({ label, disabled, onClick, children, style }) {
  return (
    <Container style={style} disabled={disabled} onClick={onClick}>
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
  style: PropTypes.object,
};

Button.defaultProp = {
  disabled: false,
};

export default Button;
