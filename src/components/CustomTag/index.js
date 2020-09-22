import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tags from "@yaireo/tagify/dist/react.tagify";

import { Container } from "./styles";

function CustomTag({ tags, header, onChange }) {
  const handleChange = (e) => {
    e.persist();
    onChange(e);
  };
  return (
    <Container>
      <h3>{header}</h3>
      <Tags tags={tags} onChange={handleChange} />
    </Container>
  );
}

CustomTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  header: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomTag;
