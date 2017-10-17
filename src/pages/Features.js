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

const Container = styled.div`
	height: 100vh;
	width: 70vw;
	min-width: 1200px;
`;

const Content = styled.div`
`;

const ContentContainer = styled.div`
	display: flex;
`;

const ImgContainer = styled.div`
  border-radius: 0.7em;
  overflow: hidden;
  margin: 2em 1em;
`;

const Description = styled.div`
	padding: 2em 1em;
`;

const H2 = styled.h2`
  font-weight: 100;
  margin-bottom: 0;
`;

const H3 = styled.h3`
	color: palevioletred;
  font-weight: 400;
  margin-top: 0;
`;

export default class Features extends React.Component {
  render() {
    console.log("Support");
    return (
    	<Page>
    		<Container>
    			<Content>
		      	<H2>High Quality Music</H2>
		      	<hr/>
		      	<ContentContainer>
		      	<div><ImgContainer><img src={require('../assets/music.gif')}/></ImgContainer></div>
		      	<Description>
			      	<H3>Easy music searching</H3>
			      	<p>Play music by simply searching for a song and selecting from a list of results.</p>
			      	<H3>Queue, shuffle, repeat and more!</H3>
			      	<p>Queue playlists and manipulate how you want skye to play back your music.</p>
			      </Description>
			      </ContentContainer>
	      	</Content>
	      	<Content>
		      	<H2>Quick search</H2>
		      	<hr/>
		      	<ContentContainer>
		      	<Description>
			      	<H3>Search for anime and manga</H3>
			      	<p>Easily retrieve information such as summary, score, episodes and status of different shows and books within Discord.</p>
			      </Description>
		      	<div><ImgContainer><img src={require('../assets/search.gif')}/></ImgContainer></div>
			      </ContentContainer>
	      	</Content>
      	</Container>
      </Page>
    );
  }
}