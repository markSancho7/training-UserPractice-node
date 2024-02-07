import { StyledContainer, StyledButton, StyledButtonLogIn } from './styles';
import { useState } from 'react';
import RegisterUser from '../registerUser/RegisterUser';
import { Link } from 'react-router-dom';

const Main = () => {
	const [content, setContent] = useState();

	return (
		<StyledContainer>
			<StyledButtonLogIn to='/logIn'>LogIn</StyledButtonLogIn>
			<StyledButton onClick={() => setContent('ir a la modal')}>
				Register
			</StyledButton>
			<RegisterUser closeModal={() => setContent()}>{content}</RegisterUser>
		</StyledContainer>
	);
};
export default Main;
