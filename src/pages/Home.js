import React from "react";
import styled from 'styled-components';

const Page = styled.div`
	background-color: #2a2d32;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	color: #f0f0f0;
`;

const H1 = styled.h1`
	font-size: 15vw;
	font-weight: 200;
	margin-bottom: 0;
`;

const H3 = styled.h3`
 	font-weight: 400;
`;

const Buttoncontainer = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1100px) {
		flex-direction column;
	}
`;

const Button = styled.button`
	font-size: 1.5em;
	border-radius: 0.3em;
	padding: 0.25em 1em;
	margin: 0.25em;
	background: transparent;
	color: palevioletred;
	border: 2px solid palevioletred;
	&:hover {
		background: palevioletred;
		color: white;
	}
	outline:none;
	cursor: pointer;
`;

const A = styled.a`
	padding: 0.5em;
	color: #f0f0f0;
	text-decoration: none;
	font-weight: bold;
`;

export default class Home extends React.Component {

	_invite() {
		window.location.href='https://discord.now.sh/364830291954499597?p1610087633';
	}

	_github() {
		window.location.href='https://github.com/Mauyeung/skye';
	}

	render() {
		return (
			<Page>
				<H1>skye</H1>
				<H3>General purpose discord bot</H3>
				<Buttoncontainer>
					<Button onClick={this._invite}>Invite</Button>
					<Button onClick={this._github}>Github</Button>
				</Buttoncontainer>
				<p>Created by<A href="https://github.com/Mauyeung">@Mauyeung</A></p>
			</Page>
		);
	}
}