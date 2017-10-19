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

export default class About extends React.Component {
  render() {
    return (
    	<Page>
      	<h1>I'll be straight up with you right now</h1>
      	<h2>I don't really know what to put here right now</h2>
      	<h2>(╯°□°)╯︵ ┻━┻</h2>
      </Page>
    );
  }
}