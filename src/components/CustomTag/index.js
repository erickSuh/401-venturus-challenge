import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Tags from '@yaireo/tagify/dist/react.tagify';

import { Container } from './styles';

function CustomTag({ tags, header, onChange }) {
  const CompTags = useCallback(
    () => <Tags value={tags} onChange={onChange} />,
    [tags, onChange],
  );

  return (
    <Container>
      <h3>{header}</h3>
      <CompTags />
    </Container>
  );
}

CustomTag.propTypes = {
  tags: PropTypes.string,
  header: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomTag;
