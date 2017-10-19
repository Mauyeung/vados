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

const H3example = styled.h3`
	color: palevioletred;
	font-weight: 400;
	padding: 0 1em;
`;

const Container = styled.div`
	padding: 0 0.5em;
`;

const Content = styled.div`
	border: 1px solid #f0f0f0;
`;

export default class Confused extends React.Component {
  render() {
    return (
      <div>
      <Container>
      	<H2>Play</H2>
      	<hr/>
   		<H3>Description</H3>
   		<p>Plays music</p>
   		<H3>Usage</H3>
   		<p>Usage stuff</p>
      	<Content>
      	<H3example>Example</H3example>
      	</Content>
      	</Container>
      </div>
    );
  }
}