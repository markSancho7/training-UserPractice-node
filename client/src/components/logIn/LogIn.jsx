import {
	StyledButtonSubmit,
	StyledContainer,
	StyledForm,
	StyledLink
} from './styles';

const LogIn = () => {
	return (
		<StyledContainer>
			<StyledLink to='/'>Home</StyledLink>
			<StyledForm onSubmit={event => handleSubmit(event)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' />
				</div>
				<div>
					<label htmlFor='pasword'>Pasword</label>
					<input type='text' name='pasword' />
				</div>
				<StyledButtonSubmit>Submit</StyledButtonSubmit>
			</StyledForm>
			<div>
				<StyledLink to='/mainPlace'>singIn</StyledLink>
			</div>
		</StyledContainer>
	);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default LogIn;
