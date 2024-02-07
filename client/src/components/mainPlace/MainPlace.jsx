import { useEffect, useState } from 'react';
import {
	StyledAside,
	StyledButtonSubmit,
	StyledCard,
	StyledContainer,
	StyledContainerDetails,
	StyledInfoContainer,
	StyledLink,
	StyledLogOutContainer,
	StyledName
} from './styles';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import UserDetails from '../userDetails/UserDetails';

const MainPlace = () => {
	const [users, setUsers] = useState([]);

	const [onlyActive, setOnlyActive] = useState(false);
	const [activeUserId, setActiveUserId] = useState(null);

	const [onlyIdle, setOnlyIdle] = useState(false);
	const [idleUserId, setIdleUserId] = useState(null);

	let filteredUsers = filterActiveUsers(users, onlyActive);
	filteredUsers = filterIdleUsers(filteredUsers, onlyIdle);
	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	return (
		<>
			<StyledContainer>
				<StyledLogOutContainer>
					<StyledLink to='/'>logOut</StyledLink>
				</StyledLogOutContainer>
				<StyledAside>
					<label htmlFor=''>Idle Users</label>
					<input
						type='checkbox'
						onChange={() => changeIdle(onlyIdle, setOnlyIdle)}
					/>
					<label htmlFor=''>Active Users</label>
					<input
						type='checkbox'
						onChange={() => changeActive(onlyActive, setOnlyActive)}
					/>
				</StyledAside>
				<StyledInfoContainer>
					{filteredUsers.map(user => (
						<StyledCard key={user._id}>
							<img src={user.routeImg} alt='' />
							<StyledName>{user.name}</StyledName>
							<div>
								<StyledButtonSubmit onClick={() => setActiveUserId(user._id)}>
									Details
								</StyledButtonSubmit>
							</div>
							<StyledContainerDetails>
								<UserDetails
									user={user}
									closeModal={() => setActiveUserId(null)}
								>
									{activeUserId === user._id}
								</UserDetails>
							</StyledContainerDetails>
						</StyledCard>
					))}
				</StyledInfoContainer>
			</StyledContainer>
		</>
	);
};
const changeActive = (onlyActive, setOnlyActive) => {
	setOnlyActive(!onlyActive);
};
const changeIdle = (onlyIdle, setOnlyIdle) => {
	setOnlyIdle(!onlyIdle);
};
const filterActiveUsers = (users, onlyActive) => {
	if (!onlyActive) {
		return [...users];
	}
	return users.filter(user => user.active);
};

const filterIdleUsers = (users, onlyIdle) => {
	if (!onlyIdle) {
		return [...users];
	}
	return users.filter(user => !user.active);
};

const getAllUsers = async setUsers => {
	const data = await getData(URLS.API_USERS);
	setUsers(data);
};

export default MainPlace;
