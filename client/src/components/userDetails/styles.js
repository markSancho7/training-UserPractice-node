import { styled } from 'styled-components';

const StyledContainer = styled.div`
	position: absolute;
	top: 0px;
	left: 370px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 100px;
	width: 700px;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	color: white;
	background-color: black;
	margin-left: auto;
	margin-right: auto;
	padding: 40px;
	filter: grayscale();
`;
const StyledContainerX = styled.div`
	margin-left: auto;
`;
export { StyledContainer, StyledContainerX };
