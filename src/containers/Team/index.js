import React from 'react';
import Header from 'components/Header';
import BaseLayout from 'components/BaseLayout';
import BaseColumn from 'components/BaseColumn';
import Panel from 'components/Panel';
import Placeholder from 'components/Placeholder';

function Team() {
  return (
    <>
      <Header />
      <BaseLayout className="fadeUp">
        <Panel>
          <div style={{ display: 'flex' }}>
            <BaseColumn>
              <Placeholder height="350px" />
            </BaseColumn>
            <BaseColumn>
              <Placeholder height="350px" />
            </BaseColumn>
          </div>
        </Panel>
      </BaseLayout>
    </>
  );
}

export default Team;
