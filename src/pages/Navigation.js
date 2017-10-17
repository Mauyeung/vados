import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  color: '#f0f0f0;
`;

const Nav = styled.nav`
  background: #7289da;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logodiv = styled.div`
  flex: 2;
`;

const Ul = styled.ul`
  padding: 0 2em;
  display: flex;
`;

const Li = styled.li`
  list-style-type: none;
  padding: 0 0.5em;
`;

const StyledLink = styled(Link)`
  padding: 0;
  color: #f0f0f0;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const H2 = styled.h2`
  font-weight: 100;
  margin: 0 2em;
`;

export default class Navigation extends React.Component {
  render() {
    return (
    <Header>
      <Nav>
        <Logodiv><StyledLink to="/"><H2>skye | スカイ</H2></StyledLink></Logodiv>
        <Ul>
          <Li><StyledLink to="features">Features</StyledLink></Li>
          <Li><StyledLink to="commands">Commands</StyledLink></Li>
          <Li><StyledLink to="about">About</StyledLink></Li>
        </Ul>
      </Nav>
    </Header>
    );
  }
}