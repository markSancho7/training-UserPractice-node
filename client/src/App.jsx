import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/router';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
