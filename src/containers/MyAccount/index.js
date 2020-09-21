import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import Panel from 'components/Panel';
import Select from 'components/Select';
import List from 'components/List';
import Button from 'components/Button';
import Placeholder from 'components/Placeholder';
import BaseLayout from 'components/BaseLayout';
import BaseColumn from 'components/BaseColumn';

import { userRemoveTeam } from 'store/actions';

function MyAccount() {
  const { t } = useTranslation('my_account');
  const user = useSelector((store) => (store.user));
  const history = useHistory();
  const dispatch = useDispatch();

  const [teams, setTeams] = useState([]);
  const [filterName, setFilterName] = useState('-1');
  const [filterDescription, setFilterDescription] = useState('-1');

  useEffect(() => {
    const sortTeams = (teamsList) => {
      if (filterName === 'ascending') {
        teamsList.sort((a, b) => a.label.localeCompare(b.label));
      } else if (filterName === 'descending') {
        teamsList.sort((a, b) => b.label.localeCompare(a.label));
      }

      if (filterDescription === 'ascending') {
        teamsList.sort((a, b) => a.label.localeCompare(b.label));
      } else if (filterDescription === 'descending') {
        teamsList.sort((a, b) => b.label.localeCompare(a.label));
      }
    };

    if (user.teams) {
      const list = user.teams.map((team) => ({
        id: team.id,
        key: team.id,
        label: team.name,
        description: team.description,
        onDelete: () => { dispatch(userRemoveTeam(team.name)); },
        onEdit: () => { history.push(`/team/${team.id}`); },
      }));
      sortTeams(list);
      setTeams(list);
    }
  }, [
    user.teams,
    dispatch,
    filterName,
    filterDescription,
    history,
  ]);

  const handleCreate = () => {
    history.push('/team');
  };

  const handleChangeNameFilter = (e) => {
    setFilterName(e.target.value);
  };

  const handleChangeDescriptionFilter = (e) => {
    setFilterDescription(e.target.value);
  };

  const headerComponent = (
    <Button onClick={handleCreate}>
      <span className="material-icons">
        add
      </span>
    </Button>
  );
  const mockList = [{
    key: 'teste 1', label: t('ascending'), value: 'ascending',
  }, {
    key: 'teste 2', label: t('descending'), value: 'descending',
  }, {
    key: 'teste 3', label: 'Name', value: '-1',
  }];
  const mockListDesc = [{
    key: 'teste 1', label: t('ascending'), value: 'ascending',
  }, {
    key: 'teste 2', label: t('descending'), value: 'descending',
  }, {
    key: 'teste 3', label: 'Description', value: '-1',
  }];
  return (
    <>
      <Header />
      <BaseLayout className="fadeUp">
        <BaseColumn>
          <Panel header={t('my_teams')} headerComponent={headerComponent}>
            <div className="row">
              <Select
                value={filterName}
                list={mockList}
                onChange={handleChangeNameFilter}
                style={{ width: '30%' }}
              />
              <Select
                value={filterDescription}
                list={mockListDesc}
                onChange={handleChangeDescriptionFilter}
              />
            </div>
            <List list={teams} />
          </Panel>
        </BaseColumn>
        <BaseColumn>
          <Panel>
            <Placeholder height="350px" />
          </Panel>
          <Panel>
            <Placeholder height="300px" />
          </Panel>
        </BaseColumn>
      </BaseLayout>
    </>
  );
}

export default MyAccount;
