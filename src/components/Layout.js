import React, {Fragment} from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = props => {
	return(
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	)
}

export default Layout