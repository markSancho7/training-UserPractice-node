import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledContainer = styled.div`
	position: fixed;
	top: 0px;
	left: 520px;
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

const StyledLink = styled(Link)`
	margin-bottom: 10px;
	margin-top: 10px;
	padding-block: 10px;
	border: solid 1px white;
`;
const StyledButtonClose = styled.button`
	width: 35px;
	margin-left: auto;
	background-color: black;
	color: white;
	border: none;
	border: solid 1px white;
`;
const StyledContainerImg = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 80px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	filter: grayscale();
`;
const StyledButtonChangeImg = styled.button`
	width: 80px;
	background-color: black;
	color: white;
	border: none;
	border: solid 1px white;
`;

const StyledButtonSubmit = styled.button`
	width: 80px;
	background-color: black;
	color: white;
	border: none;
	border: solid 1px white;
`;

export {
	StyledLink,
	StyledContainer,
	StyledButtonClose,
	StyledContainerImg,
	StyledButtonChangeImg,
	StyledButtonSubmit
};
