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

export { StyledLink, StyledContainer };
