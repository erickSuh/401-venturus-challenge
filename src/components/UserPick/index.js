import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  Container, Player, PickRate, PickRateContainer,
} from './styles';

function UserPick({ mostPick, lessPick }) {
  const { t } = useTranslation('common');

  return (
    <Container>
      <div className="left">
        <div className="content">
          <h1>{t('most_picked_player')}</h1>
          <div className="player-data">
            <Player>{mostPick.initials}</Player>
            <PickRateContainer>
              <PickRate>{mostPick.rating}</PickRate>
            </PickRateContainer>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h1>{t('less_picked_player')}</h1>
          <div className="player-data">
            <Player>{lessPick.initials}</Player>
            <PickRateContainer>
              <PickRate>{lessPick.rating}</PickRate>
            </PickRateContainer>
          </div>
        </div>
      </div>
    </Container>
  );
}

UserPick.propTypes = {
  mostPick: PropTypes.shape({
    name: PropTypes.string,
    initials: PropTypes.string,
    rating: PropTypes.string,
  }),
  lessPick: PropTypes.shape({
    name: PropTypes.string,
    initials: PropTypes.string,
    rating: PropTypes.string,
  }),
};

export default UserPick;
