import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '~/components/Header';
import Panel from '~/components/Panel';
import Select from '~/components/Select';
import List from '~/components/List';
import Button from '~/components/Button';
import { Container, Column } from './styles';

function MyAccount() {
  const { t } = useTranslation('my_account');
  const headerComponent = (
    <Button>
      <span className="material-icons">
        add
      </span>
    </Button>
  );
  const mockList = [{
    key: 'teste 1', label: 'teste 1', value: 'teste 1', selected: true,
  }, {
    key: 'teste 2', label: 'teste 2', value: 'teste 2', selected: false,
  }];
  return (
    <h2>
      <Header />
      <Container>
        <Column>
          <Panel header={t('my_teams')} headerComponent={headerComponent}>
            <div className="row">
              <Select list={mockList} />
              <Select list={mockList} />
            </div>
            <List list={mockList} />
          </Panel>
        </Column>
        <Column>
          <Panel>
            teste
          </Panel>
        </Column>
      </Container>
    </h2>
  );
}

export default MyAccount;
