import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Header from '~/components/Header';
import Panel from '~/components/Panel';
import Select from '~/components/Select';
import List from '~/components/List';
import Button from '~/components/Button';
import Placeholder from '~/components/Placeholder';
import BaseLayout from '~/components/BaseLayout';
import BaseColumn from '~/components/BaseColumn';

function MyAccount() {
  const { t } = useTranslation('my_account');
  const history = useHistory();

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
    key: 'teste 1', label: 'teste 1', value: 'teste 1', selected: true,
  }, {
    key: 'teste 2', label: 'teste 2', value: 'teste 2', selected: false,
  }, {
    key: 'teste 3', label: 'teste 3', value: 'teste 3', selected: false,
  }];
  return (
    <>
      <Header />
      <BaseLayout>
        <BaseColumn>
          <Panel header={t('my_teams')} headerComponent={headerComponent}>
            <div className="row">
              <Select list={mockList} style={{ width: '30%' }} />
              <Select list={mockList} />
            </div>
            <List list={mockList} />
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
