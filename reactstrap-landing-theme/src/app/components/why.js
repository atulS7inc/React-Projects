import React from 'react';

const Why = (props) => {
	const hrStyle = {
		textAlign:'center',
		margin:'15px auto'
	};

	return(
		<section id="why">
		    <div className="container text-center">
		      <div className="row">
		        <div className="col-md-12 wow fadeIn">
		          <h2>Why work with us?</h2>
		          <hr style={hrStyle} width="25%" />
		          <p>Bacause we are good at what we do!</p>
		        </div>
		      </div>
		      <div className="row">
		        <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
		          <i className="fa fa-thumbs-o-up fa-3x" aria-hidden="true"></i>
		          <h3>Customer Satisfaction</h3>
		          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
		        </div>
		        <div className="col-md-4 wow fadeIn" data-wow-delay="0.2s">
		          <i className="fa fa-line-chart fa-3x" aria-hidden="true"></i>
		          <h3>Instant Results</h3>
		          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
		        </div>
		        <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
		          <i className="fa fa-trophy fa-3x" aria-hidden="true"></i>
		          <h3>Award Winning Service</h3>
		          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
		        </div>
		      </div>
		    </div>
	    </section>
	);
} 
export default Why;