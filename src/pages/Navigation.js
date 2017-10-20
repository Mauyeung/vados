import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
	background-color: #7289da;
	width: 100%;
	padding: 0;
	margin: 0;
	font-size: 1.3em;
	font-weight: 100;
	color: '#f0f0f0;
`;

const Centerer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 1100px;
	display: flex;
`;

const Logodiv = styled.div`
	flex: 1;
	padding: 0 0.25em;
	display: flex;
	align-items: center;
`;

const Ul = styled.ul`
	display: flex;
	@media only screen and (max-width: 1100px) {
		display: none;
	}
	padding: 0;
	margin: 0;
	justify-content: center;
	align-items: center;
`;

const Li = styled.li`
	list-style-type: none;
	padding: 0 0.5em;
	margin: 0;
	display: table;
`;

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
	activeClassName
})`
	padding: 0;
	margin: 0;
	color: #f0f0f0;
	text-decoration: none;
	&:hover {
		color: white;
	}
	&.${activeClassName} {
		font-weight: 400;
		color: white;
	}
	display: table-cell;
`;

const H2 = styled.h2`
	font-weight: 100;
	margin: 0;
	padding: 0;
`;

export default class Navigation extends React.Component {
	render() {
		return (
			<Nav>
				<Centerer>
					<Container>
						<Logodiv><StyledLink to="/"><H2>skye | スカイ</H2></StyledLink></Logodiv>
						<Ul>
							<Li><StyledLink to="/features">Features</StyledLink></Li>
							<Li><StyledLink to="/commands">Commands</StyledLink></Li>
							<Li><StyledLink to="/about">About</StyledLink></Li>
						</Ul>
					</Container>
				</Centerer>
			</Nav>
		);
	}
}