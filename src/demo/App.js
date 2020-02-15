import React from 'react';
import { Online } from 'react-detect-offline';
import styled from 'styled-components'

import OfflineDisclaimer from '../lib';

const Header = styled.header`
  height: 3em;
  width: 100%;
  color: #F3FFBD;
  background-color: #247BA0;
  display: flex;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  margin: 1em;
`;

const App = () => (
  <main>
    <Header>
      Hello 👋
    </Header>
    <OfflineDisclaimer />
    <Online>
      <Paragraph>This content will be shown only when you're online.</Paragraph>
      <Paragraph>Turn off your connection to see the offline disclaimer page.</Paragraph>
    </Online>
  </main>
);

export default App;
