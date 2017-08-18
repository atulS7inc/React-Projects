import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const Footer = (props) => {
	return (
		<section id="footer">
			<Container>
				<Row>
					<Col md="8" xs="12">
						<h3>About XL Technology</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<ul className="list-inline">
			              <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
			            </ul>
					</Col>

					<Col md="4" xs="12">
						<h3> Say Hello </h3>
			            <ul className="list-unstyled">
			              <li><p><strong><i className="fa fa-map-marker" aria-hidden="true"></i>
			                  Address:</strong> Location, street, code</p></li>
			              <li><p><strong><i className="fa fa-envelope" aria-hidden="true"></i>
			                  Email:</strong> <a href="#">info@examplemail.com</a></p></li>
			              <li><p><strong><i className="fa fa-phone" aria-hidden="true"></i>
			                  Phone:</strong> +91 1234654</p></li>  
			            </ul>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						 <p>&copy; 2017 Designed by Atul Kumar</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Footer;