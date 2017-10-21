import React from "react";
import styled from 'styled-components';

const Page = styled.div`
	background-color: #2a2d32;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	min-width: 100%;
	align-items: center;
	color: #f0f0f0;
	margin: 0;
	padding: 0;
`;

const Container = styled.div`
	max-width: 1100px;
`;

const Content = styled.div`
`;

const ContentTitle = styled.div`
	@media only screen and (max-width: 1100px) {
		padding: 0 1em;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	padding: 0 1em;
	justify-content: center;
	max-width: 100%;
	@media only screen and (max-width: 1100px) {
		flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
	}
`;

const ImgContainer = styled.img`
	border-radius: 0.5em;
	margin: 2em 1em;
	@media only screen and (max-width: 1100px) {
		max-width: 100%;
		margin: 0 1em;
	}
`;

const ImgContainerSmall = styled.img`
	border-radius: 0.5em;
	margin: 0 1em;
	max-width: 330px;
	@media only screen and (max-width: 1100px) {
		max-width: 100%;
	}
`;

const Description = styled.div`
	padding: 2em 1em;
	flex: 1;
	@media only screen and (max-width: 1100px) {
		padding: 1em;
	}
`;

const SmallContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 0;
	@media only screen and (max-width: 1100px) {
		flex-basis: auto;
	}
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
    return (
		<Page>
			<Container>
				<Content>
					<ContentTitle>
						<H2>High Quality Music</H2>
						<hr/>
					</ContentTitle>
					<ContentContainer reverse>
						<ImgContainer src={require('../assets/music.gif')}/>
						<Description>
							<H3>Easy music searching</H3>
							<p>Play music by simply searching for a song and selecting from a list of results.</p>
							<H3>Queue, shuffle, repeat and more!</H3>
							<p>Queue playlists and manipulate how you want skye to play back your music.</p>
						</Description>
					</ContentContainer>
				</Content>
				<Content>
					<ContentTitle>
						<H2 position='right'>Fun commands and utilities</H2>
						<hr/>
					</ContentTitle>
					<ContentContainer>
						<SmallContainer>
							<Description>
								<H3><strike>Semi intelligent</strike> speech module</H3>
								<p>Talk to skye when you're bored.</p>
							</Description>
							<ImgContainerSmall src={require('../assets/talk.gif')}/>
						</SmallContainer>
						<SmallContainer>
							<Description>
								<H3>Reactions</H3>
								<p>Send different anime reaction gifs and images to the chat for everyone to see.</p>
							</Description>
							<ImgContainerSmall src={require('../assets/reactions.png')}/>
						</SmallContainer>
						<SmallContainer>
							<Description>
								<H3>Search for anime and manga</H3>
								<p>Easily retrieve information such as summary, score, episodes and status of different shows and books within Discord.</p>
							</Description>
							<ImgContainerSmall src={require('../assets/search.png')}/>
						</SmallContainer>
					</ContentContainer>
				</Content>
			</Container>
		</Page>
    );
  }
}