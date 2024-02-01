import { Link } from 'react-router-dom';
import { StyledContainer, StyledLink } from './styles';

const RegisterUser = () => {
	return (
		<StyledContainer>
			<StyledLink to='/'>Home</StyledLink>
			<form>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='pasword'>Pasword</label>
					<input type='text' name='pasword' />
				</div>
			</form>
		</StyledContainer>
	);
};
export default RegisterUser;
