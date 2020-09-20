import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import BaseLayout from 'components/BaseLayout';
import BaseColumn from 'components/BaseColumn';
import Panel from 'components/Panel';
import Placeholder from 'components/Placeholder';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import { Container, SubHeader } from './styles';

function Team() {
  const { t } = useTranslation('team');

  return (
    <>
      <Header />
      <BaseLayout className="fadeUp">
        <Panel header={t('create_your_team')}>
          <SubHeader>{t('team_information')}</SubHeader>
          <Container>
            <BaseColumn>
              <Input id="inp_team_name" type="text" label={t('team_name')} placeholder={t('chose_team_name')} />
              <TextArea id="inp_team_description" type="text" label={t('team_description')} resizable={false} maxLength={10} />
            </BaseColumn>
            <BaseColumn>
              <Input id="inp_team_name" type="email" label={t('team_website')} />
            </BaseColumn>
          </Container>

          <SubHeader>test2</SubHeader>
          <Container>
            <BaseColumn>
              <Input />
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
