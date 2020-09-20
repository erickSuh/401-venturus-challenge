import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Container, Item, Options, NameContainer, DescriptionContainer,
} from './styles';

function List({ list, children }) {
  const { t } = useTranslation('common');
  const renderList = useCallback(() => {
    if (list) {
      return list.map((item) => (
        <Item key={item.value}>
          <NameContainer>
            {item.label}
          </NameContainer>
          <DescriptionContainer>
            {item.description}
          </DescriptionContainer>
          <Options>
            <div className="tooltip">
              <span className="tooltiptext">{t('delete')}</span>
              <span className="material-icons">
                delete
              </span>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">{t('share')}</span>
              <span title={t('delete')} className="material-icons">
                share
              </span>
            </div>
            <div className="tooltip">
              <span className="tooltiptext">{t('edit')}</span>
              <span title={t('delete')} className="material-icons">
                edit
              </span>
            </div>
          </Options>
        </Item>
      ));
    }
    return null;
  }, [list, t]);

  return (
    <Container>
      {renderList()}
      {children}
    </Container>
  );
}

List.propTypes = {
  children: PropTypes.element,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      selected: PropTypes.bool,
      key: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

List.defaultProps = {
  list: [],
};

export default List;
