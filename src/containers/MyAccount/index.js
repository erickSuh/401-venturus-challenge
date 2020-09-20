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
  const [filterName] = useState('-1');
  const [filterDescription] = useState('-1');

  useEffect(() => {
    if (user.teams) {
      const list = user.teams.map((team, i) => ({
        id: `${team.name}_${i}`,
        key: `${team.name}_${i}`,
        label: team.name,
        description: team.description,
        onDelete: () => { dispatch(userRemoveTeam(team.name)); },
      }));
      setTeams(list);
    }
  }, [user.teams, dispatch]);

  const handleCreate = () => {
    history.push('/team');
  };

  const headerComponent = (
    <Button onClick={handleCreate}>
      <span className="material-icons">
        add
      </span>
    </Button>
  );
  const mockList = [{
    key: 'teste 1', label: t('ascending'), value: 'teste 1',
  }, {
    key: 'teste 2', label: t('descending'), value: 'teste 2',
  }, {
    key: 'teste 3', label: 'Name', value: '-1',
  }];
  const mockListDesc = [{
    key: 'teste 1', label: t('ascending'), value: 'teste 1',
  }, {
    key: 'teste 2', label: t('descending'), value: 'teste 2',
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
              <Select value={filterName} list={mockList} style={{ width: '30%' }} />
              <Select value={filterDescription} list={mockListDesc} />
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
