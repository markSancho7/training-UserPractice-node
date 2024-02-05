import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StyledContainer, StyledContainerX } from './styles';
import { deleteData, patchData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { useState } from 'react';

const UserDetails = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const userData = location.state.userData;
	console.log(userData);
	const [currentUser, setCurrentUser] = useState({
		name: userData.name,
		email: userData.email,
		userName: userData.userName,
		active: userData.active
	});
	console.log(currentUser, userData);
	return (
		<>
			<StyledContainer>
				<StyledContainerX>
					<Link to='/mainPlace'>X</Link>
				</StyledContainerX>

				<div>
					<img
						src='https://randomuser.me/api/portraits/med/men/75.jpg'
						alt=''
					/>
					<p>{currentUser.name}</p>
					<p>{currentUser.email}</p>
					<p>{currentUser.userName}</p>
					<p>{currentUser.active}</p>
				</div>
				<div>
					<form onSubmit={event => handleSubmit(event, currentUser, userData)}>
						<div>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								defaultValue={userData.name}
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
								defaultValue={userData.email}
								onChange={event =>
									changePropsUser(event.target, currentUser, setCurrentUser)
								}
							/>
						</div>
						<button
							onClick={() => {
								updateUser(currentUser, userData);
							}}
							type='submit'
						>
							Update
						</button>
					</form>
					<Link to='/mainPlace'>
						<button onClick={() => userDelete(userData, navigate)}>
							Delete
						</button>
					</Link>
				</div>
			</StyledContainer>
		</>
	);
};

const updateUser = async (currentUser, userData) => {
	console.log(userData);
	console.log(currentUser);
	await patchData(`${URLS.API_USERS}/${userData._id}`, currentUser);
};
const handleSubmit = async (event, currentUser, userData) => {
	event.preventDefault();
	await updateUser(currentUser, userData);
};
const changePropsUser = (newValue, currentUser, setCurrentUser) => {
	const { name, value } = newValue;
	const updatedName = { ...currentUser, [name]: value };
	setCurrentUser(updatedName);
};

const userDelete = async (userData, navigate) => {
	await deleteData(`${URLS.API_USERS}/${userData._id}`);
	navigate('/');
	console.log(userData);
};

export default UserDetails;
