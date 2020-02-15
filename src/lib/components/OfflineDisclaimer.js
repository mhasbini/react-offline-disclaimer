import React from "react";
import { Offline } from "react-detect-offline";
import Game from "react-chrome-dino";
import styled from "styled-components"

const Wrapper = styled.div`
  font-family: system-ui, sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  margin: 50px auto 0;
  max-width: 600px;
`;

const Retry = styled.a`
  color: inherit;
`;

export default () => (
  <Wrapper>
    <Offline>
      <Game />
      <h3>There is no Internet connection :(</h3>
      <h3>Try:</h3>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
      </ul>
       <Retry href="/">Retry</Retry>
    </Offline>
  </Wrapper>
);
