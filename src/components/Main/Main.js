import React from 'react';
import { inject, observer } from "mobx-react";

@inject('loginStore')
@observer
class Main extends React.Component {
	render() {
		const { loginStore: { user } } = this.props;
		return (
			<div className="Main">
				{!!user && (
					<div>
						<p>{`Name: ${user.name}`}</p>
						<p>{`E-Mail: ${user.email}`}</p>
						<p>{`position: ${user.position}`}</p>
					</div>
				)}
			</div>
		);
	}
}

export default Main;
