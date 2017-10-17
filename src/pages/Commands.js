import React from "react";
import styled from 'styled-components';

const Page = styled.div`
  background-color: #2a2d32;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
`;

export default class Commands extends React.Component {
  render() {
    return (
    	<Page>
      	<h1>Commands</h1>
      </Page>
    );
  }
}