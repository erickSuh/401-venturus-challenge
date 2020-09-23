/* eslint-disable eqeqeq */
import React, {
  useMemo, useState, useEffect, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { debounce } from 'lodash';

import Header from 'components/Header';
import BaseLayout from 'components/BaseLayout';
import BaseColumn from 'components/BaseColumn';
import Panel from 'components/Panel';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import ListRadio from 'components/ListRadio';
import CustomTag from 'components/CustomTag';
import PlayerCard from 'components/PlayerCard';
import PlayerDustbin from 'components/PlayerDustbin';

import {
  actionUserEdit,
  actionSearchPlayer,
  // actionUserFetch,
} from 'store/actions';
import { websiteValidator } from 'utils/string';
import { INITIAL_TEAM } from 'utils/team';

import {
  Container, SubHeader, SearchList, TeamSquad,
} from './styles';

function Team() {
  const { t } = useTranslation('team');
  const { user, search } = useSelector((store) => store);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [isValidWebsite, setIsValidWebsite] = useState(true);
  const [type, setType] = useState();
  const [isValidType, setIsValidType] = useState(true);
  const [tags, setTags] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [teamPlayers, setTeamPlayers] = useState(INITIAL_TEAM);
  const [teamFormation, setTeamFormation] = useState({
    defense: 4,
    middle: 4,
    middleOff: 0,
    attack: 2,
  });

  const userId = 1;

  const checkNameValid = (st, teamsList) => st.length > 0
    && !teamsList.find((team) => team.name === st && team.id != id);

  const checkAllFieldsValid = () => checkNameValid(name, user.teams) && websiteValidator(website);

  const debounceNameCheckIsValid = useCallback(
    debounce(async (st, teamsList) => {
      setIsValidName(checkNameValid(st, teamsList));
    }, 1000),
    [],
  );

  const debounceWebsiteCheckIsValid = useCallback(
    debounce(async (st) => {
      if (st.length === 0) {
        setIsValidWebsite(true);
      }
      setIsValidWebsite(websiteValidator(st));
    }, 1000),
    [],
  );

  const debounceSearchPlayer = useCallback(
    debounce(async (st) => {
      dispatch(actionSearchPlayer(st));
    }, 1000),
    [],
  );

  const handleChangeName = (e) => {
    setName(e.target.value);
    debounceNameCheckIsValid(e.target.value, user.teams);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeWebsite = (e) => {
    const string = e.target.value.replaceAll(' ', '');
    setWebsite(string);
    debounceWebsiteCheckIsValid(e.target.value);
  };

  const handleOnChangeType = (e) => {
    if (!isValidType) setIsValidType(true);
    setType(e.target.value);
  };

  const handleOnChangeTags = (e) => {
    e.persist();
    setTags(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!checkAllFieldsValid()) {
      setIsValidName(checkNameValid(name, user.teams));
      setIsValidWebsite(websiteValidator(website));
      setIsValidType(!!type);
      return;
    }
    try {
      if (id) {
        const arrTeams = user.teams.map((team) => {
          if (team.id == id) {
            return {
              id: Number.parseInt(id, 10),
              name,
              description,
              website,
              type,
              tags: typeof tags === 'string' ? JSON.parse(tags).map((tag) => tag.value) : tags,
              players: teamPlayers,
              teamFormation,
            };
          }
          return team;
        });
        dispatch(
          actionUserEdit(userId, {
            ...user,
            maxId: user.maxId ? user.maxId + 1 : 1,
            teams: arrTeams,
          }),
        );
      } else {
        dispatch(
          actionUserEdit(userId, {
            ...user,
            maxId: user.maxId ? user.maxId + 1 : 1,
            teams: [...user.teams, {
              id: user.maxId ? user.maxId + 1 : 0,
              name,
              description,
              website,
              type,
              tags: tags && tags.length ? JSON.parse(tags).map((tag) => tag.value) : tags,
              players: teamPlayers,
              teamFormation,
            }],
          }),
        );
      }
      history.push('/my-account');
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChangeSearch = (e) => {
    setSearchName(e.target.value);
    debounceSearchPlayer(e.target.value);
  };

  const handleOnDrop = (player) => {
    setTeamPlayers((prev) => {
      const team = prev.filter((p) => p.position !== player.position);
      team.push(player);
      return team;
    });
  };

  // useEffect(() => {
  //   if (id) {
  //     dispatch(actionUserFetch(userId));
  //   }
  // }, [id]);

  useEffect(() => {
    if (user && user.teams) {
      const findTeam = user.teams.find((team) => team.id == id);

      if (findTeam) {
        setName(findTeam.name);
        setDescription(findTeam.description);
        setWebsite(findTeam.website);
        setType(findTeam.type);
        setTags(findTeam.tags);
        setTeamPlayers(findTeam.players);
        setTeamFormation(findTeam.teamFormation);
      }
    }
  }, [id, user]);

  const RenderSearchList = useCallback(() => search.players.map((player) => (
    <PlayerCard
      id={player.player_id}
      name={player.player_name}
      age={player.age}
      nationality={player.nationality}
      onDrop={handleOnDrop}
      canDrag={!teamPlayers.find((tp) => tp.id === player.player_id)}
    />
  )), [search, teamPlayers]);

  const RenderPlayers = useCallback(() => {
    let players = INITIAL_TEAM;
    if (teamPlayers) {
      players = teamPlayers.sort((a, b) => a.position - b.position);
    }

    const {
      defense, middle, middleOff, attack,
    } = teamFormation;
    const goalKeeper = 1;
    let index = 0;

    const goalKeeperPlayer = players.slice(index, goalKeeper);
    index += goalKeeper;
    const defenceIndex = index;
    const defensePlayers = players.slice(index, index + defense);
    index += defense;
    const middleIndex = index;
    const middlePlayers = players.slice(index, index + middle);
    index += middle;
    const middleOffIndex = index;
    const middleOffPlayers = players.slice(index, index + middleOff);
    index += middleOff;
    const attackIndex = index;
    const attackPlayers = players.slice(index, index + attack);

    const renderRow = (positionPlayers, startIndex) => {
      if (!positionPlayers || positionPlayers.length === 0) return null;
      if (players.length > 3) {
        const firstRow = positionPlayers.slice(0, 3);
        const secondRow = positionPlayers.slice(3, 4);
        return (
          <>
            <div className="row">
              {
                firstRow.map((player, i) => (
                  <PlayerDustbin
                    allowedDropEffect="any"
                    player={player}
                    position={startIndex + i}
                    onDrop={handleOnDrop}
                  />
                ))
              }
            </div>
            <div className="row">
              {
                secondRow.map((player, i) => (
                  <PlayerDustbin
                    allowedDropEffect="any"
                    player={player}
                    position={startIndex + 3 + i}
                    onDrop={handleOnDrop}
                  />
                ))
              }
            </div>
          </>
        );
      }

      return (
        <div className="row">
          {
            positionPlayers.map((player, i) => (
              <PlayerDustbin
                allowedDropEffect="any"
                player={player}
                position={startIndex + i}
                onDrop={handleOnDrop}
              />
            ))
          }
        </div>
      );
    };

    return (
      <>
        {renderRow(goalKeeperPlayer, 0)}
        {renderRow(defensePlayers, defenceIndex)}
        {renderRow(middlePlayers, middleIndex)}
        {renderRow(middleOffPlayers, middleOffIndex)}
        {renderRow(attackPlayers, attackIndex)}
      </>
    );
  }, [teamPlayers, teamFormation]);

  const listRadio = useMemo(
    () => [
      {
        id: 'rad_real',
        key: 'rad_real',
        name: 'team_type',
        value: 'real',
        label: 'Real',
      },
      {
        id: 'rad_fantasy',
        key: 'rad_fantasy',
        name: 'team_fantasy',
        value: 'fantasy',
        label: 'Fantasy',
      },
    ],
    [],
  );

  return (
    <>
      <Header />
      <BaseLayout className="fadeUp">
        <Panel header={t('create_your_team')}>
          <SubHeader>{t('team_information')}</SubHeader>
          <Container>
            <BaseColumn>
              <Input
                id="inp_team_name"
                type="text"
                label={t('team_name')}
                placeholder={t('insert_team_name')}
                maxLength={50}
                value={name}
                onChange={handleChangeName}
                invalid={!isValidName}
              />
              <TextArea
                id="inp_team_description"
                value={description}
                onChange={handleChangeDescription}
                type="text"
                label={t('team_description')}
                resizable={false}
                maxLength={400}
              />
            </BaseColumn>
            <BaseColumn>
              <Input
                id="inp_team_website"
                placeholder={t('team_website_placeholder')}
                value={website}
                onChange={handleChangeWebsite}
                type="url"
                label={t('team_website')}
                invalid={!isValidWebsite}
              />
              <ListRadio
                list={listRadio}
                value={type}
                invalid={!isValidType}
                header={t('team_type')}
                onChange={handleOnChangeType}
              />
              <CustomTag
                header={t('tags')}
                onChange={handleOnChangeTags}
                tags={tags}
              />
            </BaseColumn>
          </Container>

          <SubHeader>{t('configure_squad')}</SubHeader>
          <Container>
            <BaseColumn>
              <Panel style={{
                backgroundImage:
                'linear-gradient(0deg, #532d8c 0%, #f2295b 100%)',
                height: '600px',
              }}
              >
                <TeamSquad>
                  <RenderPlayers />
                </TeamSquad>
              </Panel>
            </BaseColumn>
            <BaseColumn>
              <Input
                id="inp_search_player"
                placeholder=""
                value={searchName}
                onChange={handleChangeSearch}
                type="text"
                label={t('search_player')}
              />
              <SearchList>
                <RenderSearchList />
              </SearchList>
            </BaseColumn>
          </Container>

          <Container>
            <BaseColumn>
              <Button
                onClick={handleSave}
                label="Save"
                style={{ width: '100%' }}
              />
            </BaseColumn>
            <BaseColumn />
          </Container>
        </Panel>
      </BaseLayout>
    </>
  );
}

export default Team;
