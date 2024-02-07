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
import UserDetails from '../userDetails/UserDetails';

const MainPlace = () => {
	const [content, setContent] = useState();
	const [users, setUsers] = useState([]);
	console.log(content);

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
								<button onClick={() => setContent('ir a la modal')}>
									Details
								</button>
								<UserDetails user={user} closeModal={() => setContent()}>
									{content}
								</UserDetails>
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
