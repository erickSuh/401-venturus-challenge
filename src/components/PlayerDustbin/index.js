import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { getInitials } from 'utils/string';

import { Container, Content } from './styles';

const ItemTypes = {
  BOX: 'box',
};

function selectBackgroundColor(isActive) {
  if (isActive) {
    return 'green';
  }
  return 'rgba(217, 217, 217, 0.7)';
}

function Dustbin({ allowedDropEffect, player, position }) {
  const { t } = useTranslation('common');
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({
      ...player,
      position,
      allowedDropEffect,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  const RenderContent = useCallback(() => (player && player.id
    ? (
      <div className="tooltip">
        {getInitials(player.name)}
        <span className="tooltiptext">
          {t('name')}
          :
          {' '}
          {player.name}
          <br />
          {t('age')}
          :
          {' '}
          {player.age}
          <br />
          {t('nationality')}
          :
          {' '}
          {player.nationality}
        </span>
      </div>
    )
    : (<i className="material-icons">add</i>)
  ), [player, t]);

  return (
    <Container ref={drop}>
      <Content style={{ backgroundColor }}>
        <RenderContent />
      </Content>
    </Container>
  );
}

Dustbin.propTypes = {
  allowedDropEffect: PropTypes.string,
  player: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.string,
    nationality: PropTypes.string,
  }),
  position: PropTypes.number,
};

export default Dustbin;
