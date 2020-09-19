import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Select({
  list, children, onChange, style,
}) {
  const renderList = useCallback(() => {
    if (list) {
      return list.map((item) => (
        <option key={item.key} value={item.value} selected={item.selected}>{item.label}</option>
      ));
    }
    return null;
  }, [list]);

  return (
    <Container style={style}>
      <select onChange={onChange}>
        {renderList()}
        {children}
      </select>
    </Container>
  );
}

Select.propTypes = {
  children: PropTypes.element,
  onChange: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      selected: PropTypes.bool,
      key: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  style: PropTypes.object,
};

Select.defaultProps = {
  list: [],
};

export default Select;
