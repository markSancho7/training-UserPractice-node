import { styled } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: 100px;
	width: 400px;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	color: white;
	background-color: black;
	margin-left: auto;
	margin-right: auto;
	padding: 30px;
`;

const StyledButton = styled.button`
	margin-bottom: 20px;
	margin-top: 10px;
	padding-block: 10px;
	background-color: black;
	color: white;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	border: solid 1px white;
`;

export { StyledContainer, StyledButton };
