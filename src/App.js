import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './page/Home';
import Header from './component/Appbar/Header';
function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Home />
		</React.Fragment>
	);
}

export default App;
