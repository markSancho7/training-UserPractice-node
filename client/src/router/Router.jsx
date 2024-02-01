import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import RegisterUser from '../components/registerUser/RegisterUser';
import LogIn from '../components/logIn/LogIn';
import MainPlace from '../components/mainPlace/MainPlace';
import UserDetails from '../components/userDetails/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/registerUser' element={<RegisterUser />} />
			<Route path='/logIn' element={<LogIn />} />
			<Route path='/mainPlace' element={<MainPlace />} />
			<Route path='/userDetails' element={<UserDetails />} />
		</Routes>
	);
};
export default Router;
