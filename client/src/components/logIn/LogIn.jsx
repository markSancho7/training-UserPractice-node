import { StyledContainer, StyledForm, StyledLink } from './styles';

const LogIn = () => {
	return (
		<StyledContainer>
			<StyledLink to='/'>Home</StyledLink>
			<StyledForm>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='pasword'>Pasword</label>
					<input type='text' name='pasword' />
				</div>
				<button>Submit</button>
			</StyledForm>
			<div>
				<StyledLink to='/mainPlace'>singIn</StyledLink>
			</div>
		</StyledContainer>
	);
};

export default LogIn;
