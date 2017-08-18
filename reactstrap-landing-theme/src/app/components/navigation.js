import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen : false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render(){
		return(
			<div> 
				<Navbar toggleable fixed>
					<NavbarToggler className="hidden-sm-up" right onClick={this.toggle}>
					 	&#9776;
					</NavbarToggler>
					<NavbarBrand href="/" className="float-sm-left">
						<img className="image-fluid" src="../../assets/images/logo-small.png" />
					</NavbarBrand>
					<Collapse className="navbar-toggleable-sm" isOpen={this.state.isOpen} navbar>
						<Nav navbar className="ml-auto">
							<NavItem>
								<NavLink href="#social">CONNECT</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#who">WHO</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#work">WORK</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#why">WHY</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#customer">CUSTOMERS</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#pricing">PRICING</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#contact">CONTACT</NavLink>
							</NavItem>
						</Nav>
					</Collapse> 		
				</Navbar>
			</div>
		);
	}
}

export default Navigation;