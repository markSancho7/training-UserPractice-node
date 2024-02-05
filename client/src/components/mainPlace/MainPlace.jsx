import { useEffect, useState } from 'react';
import {
	StyledAside,
	StyledContainer,
	StyledInfoContainer,
	StyledLink,
	StyledLogOutContainer
} from './styles';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';

const MainPlace = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	console.log('RENDER');
	useEffect(() => {
		getAllUsers(setUsers);
	}, []);
	console.log(users);
	return (
		<>
			<StyledContainer>
				<StyledAside>
					<button>All Users</button>
					<button>Active Users</button>
					<button>Idle Users</button>
				</StyledAside>
				<StyledInfoContainer>
					<StyledLogOutContainer>
						<StyledLink to='/'>logOut</StyledLink>
					</StyledLogOutContainer>
					{users.map(user => (
						<div key={user._id}>
							<p>{user.name}</p>
							<div>
								<button
									onClick={() =>
										navigate(
											{ pathname: '/UserDetails' },
											{ state: { userData: user } }
										)
									}
								>
									Details
								</button>
							</div>
						</div>
					))}
				</StyledInfoContainer>
			</StyledContainer>
		</>
	);
};
const getAllUsers = async setUsers => {
	const data = await getData(URLS.API_USERS);
	setUsers(data);
};

export default MainPlace;
