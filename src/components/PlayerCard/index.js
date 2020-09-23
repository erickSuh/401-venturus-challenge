import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import {
  Container, Content, Row, DataGroup,
} from './styles';

const ItemTypes = {
  BOX: 'box',
};

function PlayerCard({
  id, name, age, nationality, onDrop, canDrag,
}) {
  const item = useCallback({
    id, name, age, nationality, type: ItemTypes.BOX,
  }, [id, name, age, nationality]);
  const [{ opacity }, drag] = useDrag({
    item,
    canDrag,
    end(it, monitor) {
      const dropResult = monitor.getDropResult();
      if (it && dropResult) {
        const isDropAllowed = dropResult.allowedDropEffect === 'any'
          || dropResult.allowedDropEffect === dropResult.dropEffect;
        if (isDropAllowed) {
          onDrop({
            id: it.id,
            name: it.name,
            age: it.age,
            nationality: it.nationality,
            position: dropResult.position,
          });
        }
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.6 : 1,
    }),
  });

  return (
    <Container>
      <Content ref={drag} style={{ opacity, background: canDrag ? '' : 'gray' }}>
        <Row>
          <DataGroup>
            <span>
              Name:
            </span>
            {name}
          </DataGroup>
          <DataGroup>
            <span>
              Age:
            </span>
            {age}
          </DataGroup>
        </Row>
        <Row>
          <DataGroup>
            <span>
              Nationality:
            </span>
            {nationality}
          </DataGroup>
        </Row>
      </Content>
    </Container>
  );
}

PlayerCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  nationality: PropTypes.string,
  onDrop: PropTypes.func,
  canDrag: PropTypes.bool,
};

export default PlayerCard;
