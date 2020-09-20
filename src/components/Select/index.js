import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Select({
  value, list, children, onChange, style,
}) {
  const renderList = useCallback(() => {
    if (list) {
      return list.map((item) => (
        item.value !== '-1'
          ? <option key={item.key} value={item.value}>{item.label}</option>
          : <option key={item.key} value={item.value} disabled hidden>{item.label}</option>
      ));
    }
    return null;
  }, [list]);

  return (
    <Container style={style}>
      <select placeholder="teste" value={value} onChange={onChange}>
        {renderList()}
        {children}
      </select>
    </Container>
  );
}

Select.propTypes = {
  children: PropTypes.element,
  onChange: PropTypes.func,
  value: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
