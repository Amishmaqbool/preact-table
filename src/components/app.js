import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux'
import Header from './header';
import store from '../../store';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
	<div id="app">
		<Provider store={store}>
			<Header />
			<Router>
				<Home path="/" />
			</Router>
		</Provider>
	</div>
)

export default App;
