import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getInitials } from 'utils/string';
import { Container, Icon, IconContainer } from './styles';

function Header() {
  const { t } = useTranslation('common');
  const user = useSelector((store) => store.user);

  const UserComponent = useCallback(() => {
    if (!user.name) return null;
    return (
      <div>
        {user.name}
        <div className="user-icon">
          {getInitials(user.name)}
        </div>
      </div>
    );
  }, [user]);

  return (
    <Container>
      <IconContainer href="/">
        <Icon alt="icon" />
        {t('title')}
      </IconContainer>

      <UserComponent />
    </Container>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
