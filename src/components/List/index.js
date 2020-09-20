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
            <button type="button" className="tooltip" onClick={item.onDelete}>
              <span className="tooltiptext">{t('delete')}</span>
              <span className="material-icons">
                delete
              </span>
            </button>
            <button type="button" className="tooltip" onClick={item.onShare}>
              <span className="tooltiptext">{t('share')}</span>
              <span title={t('share')} className="material-icons">
                share
              </span>
            </button>
            <button type="button" className="tooltip" onClick={item.onEdit}>
              <span className="tooltiptext">{t('edit')}</span>
              <span title={t('edit')} className="material-icons">
                edit
              </span>
            </button>
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
      key: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
      onDelete: PropTypes.func,
      onEdit: PropTypes.func,
      onShare: PropTypes.func,
    }),
  ),
};

List.defaultProps = {
  list: [],
};

export default List;
