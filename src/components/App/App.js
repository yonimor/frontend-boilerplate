import React from 'react';
import { inject } from 'mobx-react';
import Main from '../Main/Main';
import Login from '../Login/Login';

@inject('loginStore')
class App extends React.Component {
	render() {
		const { loginStore: { isLoggedIn } } = this.props;
		
		console.log('this.props', isLoggedIn);
		
		return (
			<div className="App">
				{isLoggedIn ? <Main /> : <Login />}
			</div>
		);
	}
}


export default App;
