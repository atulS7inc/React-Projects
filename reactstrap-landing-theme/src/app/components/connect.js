//Stateless component

import React from 'react';

const Connect = (props)=>{
	return(
		<section id="social">
			<div className="container wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
				<div className="row">
					<div className="col-md-6">
						<h2>Connect with us</h2>
						<hr width="50%"/>
						<p>Duis aute irure dolor in reprehenderit in voluptate 
						velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>

					<div className="col-md-6">
						<ul className="list-inline">
			              <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
			              <li className="list-inline-item"><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
           				</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Connect;
