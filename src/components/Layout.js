import React, {Fragment} from 'react'

import Header from './Header'

const Layout = props => {
	return(
		<div>
			<Header />
			{props.children}
		</div>
	)
}

export default Layout