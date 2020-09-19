import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Mask } from './styles';

function Modal({
  onClickAway, isOpen, children, style,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <Container className={isVisible ? 'hidden' : null} style={style}>
      <div className={isVisible ? 'hidden' : null}>
        { children }
      </div>
      <Mask className={isVisible ? 'hidden' : null} onClick={onClickAway} />
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickAway: PropTypes.func.isRequired,
};

export default Modal;
