import React, { Component } from 'react';

import Navigation  from './navigation.js';
import Header  from './header.js';
import Connect from './connect.js';
import Who from './who.js';
import WorkList from './work-list.js';
import Why from './why.js';
import Customer from './customer';
import Pricing from './pricing';
import Contact from './contact';
import Footer from './footer';

class App extends Component {
	render(){
		return(
			<div>
				<Navigation />
				<Header />
				<Connect />
				<Who />
				<WorkList />
				<Why />
				<Customer />
				<Pricing />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;