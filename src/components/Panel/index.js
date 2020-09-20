import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, HeaderContainer, Content } from './styles';

function Panel({
  children, headerComponent, header, style,
}) {
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
    <Container style={style}>
      {
        componentHeader()
      }
      <Content>
        {children}
      </Content>
    </Container>
  );
}

Panel.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string,
  headerComponent: PropTypes.node,
  style: PropTypes.object,
};

Panel.defaultProps = {
  header: '',
};

export default Panel;
