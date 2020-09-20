import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import BaseLayout from 'components/BaseLayout';
import BaseColumn from 'components/BaseColumn';
import Panel from 'components/Panel';
import Placeholder from 'components/Placeholder';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import ListRadio from 'components/ListRadio';
import { Container, SubHeader } from './styles';

function Team() {
  const { t } = useTranslation('team');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const listRadio = useMemo(() => ([{
    id: 'rad_real', key: 'rad_real', name: 'team_type', value: 'real', label: 'Real',
  },
  {
    id: 'rad_fantasy', key: 'rad_fantasy', name: 'team_fantasy', value: 'fantasy', label: 'Fantasy',
  }]), []);

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
              />
              <TextArea
                id="inp_team_description"
                value={website}
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
                onChange={handleChangeWebsite}
                type="email"
                label={t('team_website')}
              />
              <ListRadio list={listRadio} header={t('team_type')} />
            </BaseColumn>
          </Container>

          <SubHeader>{t('configure_squad')}</SubHeader>
          <Container>
            <BaseColumn>
              <Placeholder height="350px" />
            </BaseColumn>
            <BaseColumn>
              <Placeholder height="350px" />
            </BaseColumn>
          </Container>

          <Container>
            <BaseColumn>
              <Button label="Save" style={{ width: '100%' }} />
            </BaseColumn>
            <BaseColumn />
          </Container>
        </Panel>
      </BaseLayout>
    </>
  );
}

export default Team;
