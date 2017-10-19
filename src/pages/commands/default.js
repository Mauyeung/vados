import React from "react";
import styled from 'styled-components';

const H2 = styled.h2`
	font-size: 2em;
	font-weight: 100;
	margin-bottom: 0;
`;

const H3 = styled.h3`
	color: palevioletred;
	font-weight: 400;
`;

export default class Default extends React.Component {
  render() {
    return (
      <div>
    	<H2>I'll be straight up with you right now</H2>
    	<H3>I don't really know what to put here right now.... but click the command you want to view</H3>
    	<H3>(╯°□°)╯︵ ┻━┻</H3>
      </div>
    );
  }
}