import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, Container, Label } from './styles';

function Input({
  id,
  label,
  type,
  role,
  invalid,
  maxLength,
  placeholder,
  onChange,
  className,
  children,
  style,
}) {
  return (
    <Container className={className} style={style}>
      <Label htmlFor={id} invalid={invalid}>
        {label}
      </Label>
      <CustomInput
        id={id}
        role={role}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        invalid={invalid}
        maxLength={maxLength}
      />
      {children}
    </Container>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  role: PropTypes.string,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Input;
