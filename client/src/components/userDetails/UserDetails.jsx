import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledContainer, StyledContainerX } from './styles';
import { deleteData, patchData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const UserDetails = ({ user, closeModal, children }) => {
	if (!children) return;
	const [currentUser, setCurrentUser] = useState({
		routeImg: user.routeImg,
		name: user.name,
		email: user.email,
		userName: user.userName,
		active: user.active,
		sex: user.sex
	});
	console.log(currentUser);
	return createPortal(
		<>
			<StyledContainer>
				<StyledContainerX>
					<button onClick={closeModal}>X</button>
				</StyledContainerX>

				<div>
					<img src={currentUser.routeImg} alt='' />
					<p>{currentUser.name}</p>
					<p>{currentUser.email}</p>
					<p>{currentUser.userName}</p>
					<p>{currentUser.active}</p>
					<p>{currentUser.sex}</p>
				</div>
				<div>
					<form onSubmit={event => handleSubmit(event, currentUser, user)}>
						<div>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								defaultValue={user.name}
								onChange={event =>
									changePropsUser(event.target, currentUser, setCurrentUser)
								}
							/>
						</div>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								name='email'
								defaultValue={user.email}
								onChange={event =>
									changePropsUser(event.target, currentUser, setCurrentUser)
								}
							/>
						</div>
						<div>
							<label htmlFor='userName'>User name</label>
							<input
								type='text'
								name='userName'
								defaultValue={user.userName}
								onChange={event =>
									changePropsUser(event.target, currentUser, setCurrentUser)
								}
							/>
						</div>
						<button
							onClick={() => {
								updateUser(currentUser, user);
							}}
							type='submit'
						>
							Update
						</button>
					</form>
					<Link to='/mainPlace'>
						<button
							onClick={() => {
								userDelete(user);
							}}
						>
							Delete
						</button>
					</Link>
				</div>
			</StyledContainer>
		</>,
		document.getElementById('modalDetails')
	);
};

const updateUser = async (currentUser, user) => {
	console.log(user);
	console.log(currentUser);
	await patchData(`${URLS.API_USERS}/${user._id}`, currentUser);
};
const handleSubmit = async (event, currentUser, user) => {
	event.preventDefault();
	await updateUser(currentUser, user);
};
const changePropsUser = (newValue, currentUser, setCurrentUser) => {
	const { name, value } = newValue;
	const updatedName = { ...currentUser, [name]: value };
	setCurrentUser(updatedName);
};

const userDelete = async user => {
	await deleteData(`${URLS.API_USERS}/${user._id}`);
	console.log(user);
};

export default UserDetails;
