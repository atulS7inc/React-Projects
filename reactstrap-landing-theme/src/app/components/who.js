import React from 'react';

const Who = (props) => {
	return(

		<section id="who">
	      <div className="container">
	        <div className="row">
	          <div className="col-md-6  wow fadeInLeft" data-wow-delay="0.5s" data-delay-duration="1s">
	            <h2>Who we are...</h2>
	            <hr width="50%" />
	            <p className="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	            <a className="btn btn-who" href="#">Find out more</a>
	          </div>
	          <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5s" data-delay-duration="1s">
	            <img className="img-fluid" src="../../assets/images/what-image.png" />
	          </div>
	        </div>
	      </div>
	    </section>
    );
}

export default Who;