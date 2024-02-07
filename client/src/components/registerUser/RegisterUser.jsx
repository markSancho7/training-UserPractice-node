import { Link } from 'react-router-dom';
import {
	StyledButtonChangeImg,
	StyledButtonClose,
	StyledButtonSubmit,
	StyledContainer,
	StyledContainerImg,
	StyledLink
} from './styles';
import { useState } from 'react';
import { postData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { createPortal } from 'react-dom';

const RegisterUser = ({ closeModal, children }) => {
	if (!children) return;
	const [newUser, setNewUser] = useState({
		routeImg: '',
		name: '',
		email: '',
		pasword: '',
		userName: '',
		active: true,
		sex: 'men'
	});
	console.log(newUser);
	return createPortal(
		<StyledContainer>
			<StyledButtonClose onClick={closeModal}>X</StyledButtonClose>
			<p>REGISTER USER</p>
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
					<label htmlFor='pasword'>Pasword</label>
					<input
						type='text'
						name='pasword'
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
				<StyledContainerImg>
					<img src={newUser.routeImg} alt='' />
					<StyledButtonChangeImg onClick={() => changeImg(newUser, setNewUser)}>
						Change img
					</StyledButtonChangeImg>
				</StyledContainerImg>
				<div>
					<label htmlFor='sex'>male</label>
					<input
						type='radio'
						name='sex'
						value='men'
						onChange={event =>
							setNewUser({ ...newUser, sex: event.target.value })
						}
					/>
					<label htmlFor='sex'>female</label>
					<input
						type='radio'
						name='sex'
						value='women'
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
				<StyledButtonSubmit type='submit' onClick={() => finalUser(newUser)}>
					Submit
				</StyledButtonSubmit>
			</form>
		</StyledContainer>,
		document.getElementById('modalRegister')
	);
};
const changeImg = (newUser, setNewUser) => {
	const newNumber = Math.floor(Math.random() * 101);
	const route = `https://randomuser.me/api/portraits/med/${newUser.sex}/${newNumber}.jpg`;
	const createNewUser = { ...newUser, routeImg: route };
	setNewUser(createNewUser);
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
