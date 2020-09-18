import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, HeaderContainer, Content } from './styles';

function Panel({ children, headerComponent, header }) {
  const componentHeader = useCallback(() => {
    if (header) {
      return (
        <HeaderContainer>
          <h1>
            {header}
          </h1>
          {headerComponent}
        </HeaderContainer>
      );
    }
    return null;
  }, [header, headerComponent]);

  return (
    <Container>
      {
        componentHeader()
      }
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Panel;

Panel.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  headerComponent: PropTypes.node.isRequired,
};
