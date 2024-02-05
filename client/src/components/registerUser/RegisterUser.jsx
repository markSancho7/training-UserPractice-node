import { Link } from 'react-router-dom';
import { StyledContainer, StyledLink } from './styles';
import { useState } from 'react';
import { postData } from '../../utils/api';
import { URLS } from '../../constants/urls';

const RegisterUser = () => {
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		userName: '',
		active: true,
		sex: 'male'
	});
	console.log(newUser);
	return (
		<StyledContainer>
			<StyledLink to='/'>Home</StyledLink>
			<form onSubmit={event => handleSubmit(event, newUser)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						onChange={event =>
							registerNewUser(event.target, newUser, setNewUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						onChange={event =>
							registerNewUser(event.target, newUser, setNewUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='userName'>UserName</label>
					<input
						type='text'
						name='userName'
						onChange={event =>
							registerNewUser(event.target, newUser, setNewUser)
						}
					/>
				</div>
				<div>
					<label htmlFor='sex'>male</label>
					<input
						type='radio'
						name='sex'
						value='male'
						onChange={event =>
							setNewUser({ ...newUser, sex: event.target.value })
						}
					/>
					<label htmlFor='sex'>female</label>
					<input
						type='radio'
						name='sex'
						value='female'
						onChange={event =>
							setNewUser({ ...newUser, sex: event.target.value })
						}
					/>
				</div>

				<div>
					<label htmlFor='active'>Active</label>
					<input
						type='radio'
						name='active'
						value='male'
						onChange={() => setNewUser({ ...newUser, active: true })}
					/>
					<label htmlFor='active'>Idle</label>
					<input
						type='radio'
						name='active'
						onChange={() => setNewUser({ ...newUser, active: false })}
					/>
				</div>
				<button type='submit' onClick={() => finalUser(newUser)}>
					Submit
				</button>
			</form>
		</StyledContainer>
	);
};

const handleSubmit = event => {
	event.preventDefault();
};
const finalUser = async newUser => {
	console.log(newUser);
	await postData(`${URLS.API_USERS}`, newUser);
};

const registerNewUser = (input, newUser, setNewUser) => {
	const { name, value } = input;
	const createUser = { ...newUser, [name]: value };
	setNewUser(createUser);
};

export default RegisterUser;
