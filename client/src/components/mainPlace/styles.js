import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	text-align: center;
	margin-top: 100px;
	width: 500px;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	color: white;
	background-color: black;
	margin-left: auto;
	margin-right: auto;
	padding: 30px;
`;
const StyledAside = styled.aside`
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-right: 20px;
	width: 160px;
`;
const StyledInfoContainer = styled.div`
	width: 360px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const StyledLogOutContainer = styled.div`
	margin-left: auto;
`;
const StyledLink = styled(Link)`
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 10px;
	border: solid 1px white;
`;
export {
	StyledContainer,
	StyledAside,
	StyledInfoContainer,
	StyledLogOutContainer,
	StyledLink
};
