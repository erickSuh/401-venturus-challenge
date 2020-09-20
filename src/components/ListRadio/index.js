import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, List } from './styles';

function ListRadio({
  id, list, header, value, onChange, style, children,
}) {
  const renderList = useCallback(() => {
    if (list) {
      return list.map((item) => (
        <label htmlFor={item.id}>
          <input
            id={item.id}
            type="radio"
            value="Other"
            checked={item.value === value}
            onChange={onChange}
          />
          {item.label}
        </label>
      ));
    }
    return null;
  }, [list, value]);

  return (
    <Container id={id} style={style}>
      <h3>{header}</h3>
      <List>
        {renderList()}
        {children}
      </List>
    </Container>
  );
}

ListRadio.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      key: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  header: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element,
};

ListRadio.defaultProps = {
  list: [],
};

export default ListRadio;