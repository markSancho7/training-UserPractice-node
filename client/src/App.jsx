import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/router';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
