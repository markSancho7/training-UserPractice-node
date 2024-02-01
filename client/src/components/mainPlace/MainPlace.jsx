import { Link } from 'react-router-dom';
import {
	StyledAside,
	StyledContainer,
	StyledInfoContainer,
	StyledLink,
	StyledLogOutContainer
} from './styles';

const MainPlace = () => {
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
					<div>
						<img src='' alt='' />
						<p>Marcos Sancho</p>
					</div>
					<div>
						<StyledLink to='/UserDetails'>Details</StyledLink>
					</div>
				</StyledInfoContainer>
			</StyledContainer>
		</>
	);
};
export default MainPlace;
