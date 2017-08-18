import React from 'react';
import _ from 'lodash';

import CustomerReview from './customer-review';

const Customer = ( props ) => {
	// Bootstrap Carousel is not working due to javascript library clash
	// need to be resolved later 

	const reviews = [
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		},
		{
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			footerText: 'Someone famous in',
			sourceTitle: 'Source Title'
		}

	];

	function renderReviewGrid(reviewTriplets,i){
		const className = `carousel-item ${ i == 0 ? 'active' : '' }`;
		return(
			<div className={className}>
				{reviewTriplets.map((review) => {
					return <CustomerReview review={review} />
				})};
			</div>
		);
	}

	return (
		<section id="customer">
			<div className="container text-center wow fadeInUp" data-wow-delay="0.2s">
				<div className="row">
					<div className="col-md-12">
						<h2> Customers </h2>
			            <hr className="text-center mx-auto" width="25%" />
			            <p className="lead"> Read what some of our customers say about about our service</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						  <ol className="carousel-indicators">
						    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						  </ol>

						  <div className="carousel-inner" role="listbox">
							{_.chunk(reviews,3).map(renderReviewGrid)}
						  </div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);	
}
export default Customer;