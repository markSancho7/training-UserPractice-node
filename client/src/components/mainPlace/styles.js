import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
	width: 650px;
	height: 100vh;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	color: white;
	background-color: black;
	margin-left: auto;
	margin-right: auto;
	padding-top: 20px;
`;
const StyledAside = styled.aside`
	display: flex;
	justify-content: space-between;
	width: 440px;
`;
const StyledInfoContainer = styled.div`
	width: 610px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
const StyledLogOutContainer = styled.div`
	margin-left: auto;
	margin-bottom: 30px;
`;
const StyledLink = styled(Link)`
	margin-bottom: 10px;
	margin-top: 10px;
	padding: 10px;
	border: solid 1px white;
`;
const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 200px;
	align-items: center;
	justify-content: center;
	border: 1px solid white;
	margin: 5px;
	padding-block: 5px;
	filter: grayscale();
`;
const StyledName = styled.p`
	display: block;
	margin: 5px;
	padding: 0px;
`;
const StyledButtonSubmit = styled.button`
	margin-bottom: 10px;
	margin-top: 5px;
	padding: 5px 10px;
	background-color: black;
	color: white;
	font-family: 'Space Mono', monospace;
	font-size: 20px;
	border: solid 1px white;
`;

const StyledContainerDetails = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
`;
export {
	StyledContainer,
	StyledAside,
	StyledInfoContainer,
	StyledLogOutContainer,
	StyledLink,
	StyledCard,
	StyledContainerDetails,
	StyledName,
	StyledButtonSubmit
};
