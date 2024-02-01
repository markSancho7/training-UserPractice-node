import { Link } from 'react-router-dom';
import { StyledContainer, StyledLink } from './styles';

const Main = () => {
	return (
		<StyledContainer>
			<StyledLink to='/'>Home</StyledLink>
			<StyledLink to='/registerUser'>RegisterUser</StyledLink>
			<StyledLink to='/logIn'>LogIn</StyledLink>
		</StyledContainer>
	);
};
export default Main;
