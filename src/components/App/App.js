import React from 'react';
import { inject, observer } from 'mobx-react';
import Main from '../Main/Main';
import Login from '../Login/Login';

@inject('loginStore')
@observer
class App extends React.Component {
	componentDidMount() {
		const { loginStore } = this.props;
		
		loginStore.login();
	}
	
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
