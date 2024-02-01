import { Link } from 'react-router-dom';
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

const StyledLink = styled(Link)`
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 10px;
	border: solid 1px white;
`;
const StyledForm = styled.form`
	margin-top: 10px;
	margin-bottom: 30px;
`;

export { StyledLink, StyledContainer, StyledForm };
