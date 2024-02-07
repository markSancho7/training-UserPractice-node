import { StyledContainer, StyledButton } from './styles';
import { useState } from 'react';
import RegisterUser from '../registerUser/RegisterUser';
import { Link } from 'react-router-dom';

const Main = () => {
	const [content, setContent] = useState();
	console.log(content);
	return (
		<StyledContainer>
			<Link to='/logIn'>LogIn</Link>
			<StyledButton onClick={() => setContent('ir a la modal')}>
				register
			</StyledButton>
			<RegisterUser closeModal={() => setContent()}>{content}</RegisterUser>
		</StyledContainer>
	);
};
export default Main;
