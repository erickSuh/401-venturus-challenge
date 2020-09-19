import React from 'react';
import Header from '~/components/Header';
import BaseLayout from '~/components/BaseLayout';
import BaseColumn from '~/components/BaseColumn';
import Panel from '~/components/Panel';
import Placeholder from '~/components/Placeholder';

function Team() {
  return (
    <>
      <Header />
      <BaseLayout>
        <BaseColumn>
          <Panel>
            <Placeholder height="350px" />
          </Panel>
        </BaseColumn>
      </BaseLayout>
    </>
  );
}

export default Team;
