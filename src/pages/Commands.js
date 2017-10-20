import React from "react";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {Route} from "react-router";

import Default from "./commands/default";
import Play from "./commands/play";
import Pause from "./commands/pause";
import Stop from "./commands/stop";
import Resume from "./commands/resume";
import Next from "./commands/next";
import List from "./commands/list";
import Clear from "./commands/clear";
import Remove from "./commands/remove";
import Shuffle from "./commands/shuffle";
import Repeat from "./commands/repeat";
import Anime from "./commands/anime";
import Manga from "./commands/manga";
import Lewd from "./commands/lewd";
import Cry from "./commands/cry";
import Pout from "./commands/pout";
import Confused from "./commands/confused";
import Smug from "./commands/smug";

const Page = styled.div`
	background-color: #2a2d32;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	color: #f0f0f0;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	width: 1100px;
	display: flex;
	flex-direction: row;
`;

const Content = styled.div`
	flex: 1;
`;

const Nav = styled.nav`
	padding: 0 0.5em;
	margin: 0;
	font-size: 1.2em;
	font-weight: 100;
`;

const Ul = styled.ul`
	padding: 0;
	margin: 0;
`;

const Li = styled.li`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: table;
`;

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
	activeClassName
})`

	margin: 0;
	padding: 0.5em;
	color: #f0f0f0;
	text-decoration: none;
	&:hover {
		color: white;
	}
	&.${activeClassName} {
		border-left: 1px solid palevioletred;
	}
	display: table-cell;
`;

const H2 = styled.h2`
	font-weight: 100;
	margin-bottom: 0;
`;

const H3 = styled.h3`
	color: palevioletred;
	font-weight: 400;
	margin: 0;
	padding; 0;
`;

class Tab extends React.Component {

	_toggleActive(){

	}

  render() {
    return (
    <StyledLink 
      onClick={this._toggleActive}
      to={this.props.to}
    >
    	{this.props.children}
    </StyledLink>
    );
  }
}

export default class Commands extends React.Component {
  render() {
    return (
		<Page>
			<Container>
				<Content>
					<Route exact path={this.props.match.path} component={Default}/>
					<Route path={this.props.match.path + '/play'} component={Play}/>
					<Route path={this.props.match.path + '/pause'} component={Pause}/>
					<Route path={this.props.match.path + '/stop'} component={Stop}/>
					<Route path={this.props.match.path + '/resume'} component={Resume}/>
					<Route path={this.props.match.path + '/next'} component={Next}/>
					<Route path={this.props.match.path + '/list'} component={List}/>
					<Route path={this.props.match.path + '/clear'} component={Clear}/>
					<Route path={this.props.match.path + '/remove'} component={Remove}/>
					<Route path={this.props.match.path + '/shuffle'} component={Shuffle}/>
					<Route path={this.props.match.path + '/repeat'} component={Repeat}/>
					<Route path={this.props.match.path + '/anime'} component={Anime}/>
					<Route path={this.props.match.path + '/manga'} component={Manga}/>
					<Route path={this.props.match.path + '/lewd'} component={Lewd}/>
					<Route path={this.props.match.path + '/cry'} component={Cry}/>
					<Route path={this.props.match.path + '/pout'} component={Pout}/>
					<Route path={this.props.match.path + '/confused'} component={Confused}/>
					<Route path={this.props.match.path + '/smug'} component={Smug}/>
				</Content>
				<Nav>
				<H2>Commands</H2>
					<H3>Music</H3>
					<Ul>
						<Li><StyledLink to={this.props.match.path + '/play'}>play</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/pause'}>pause</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/stop'}>stop</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/resume'}>resume</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/next'}>next</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/list'}>list</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/clear'}>clear</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/remove'}>remove</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/shuffle'}>shuffle</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/repeat'}>repeat</StyledLink></Li>
					</Ul>
					<H3>Search</H3>
					<Ul>
						<Li><StyledLink to={this.props.match.path + '/anime'}>anime</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/manga'}>manga</StyledLink></Li>
					</Ul>
					<H3>Reactions</H3>
					<Ul>
						<Li><StyledLink to={this.props.match.path + '/lewd'}>lewd</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/cry'}>cry</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/pout'}>pout</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/confused'}>confused</StyledLink></Li>
						<Li><StyledLink to={this.props.match.path + '/smug'}>smug</StyledLink></Li>
					</Ul> 
				</Nav>
			</Container>
		</Page>
    );
  }
}