import { Link } from 'react-router-dom';
import { StyledContainer, StyledContainerX } from './styles';

const UserDetails = () => {
	return (
		<>
			<StyledContainer>
				<StyledContainerX>
					<Link to='/mainPlace'>X</Link>
				</StyledContainerX>
				<div>
					<img src='' alt='' />
				</div>
				<div>
					<p>Nombre</p>
					<p>Apellidos</p>
					<p>email</p>
					<p>activo</p>
				</div>
				<div>
					<button>Update</button>
					<button>Delete</button>
				</div>
			</StyledContainer>
		</>
	);
};
export default UserDetails;
