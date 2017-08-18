import React from 'react';

const CustomerReview = (props) => {
	return(
		<blockquote className="blockquote col-md-4">
            <p className="m-b-0">{props.review.text}</p>
            <footer className="blockquote-footer">{props.review.footerText}
            	<cite title="Source Title">{props.review.sourceTitle}</cite>
            </footer>
        </blockquote>
	);
}

export default CustomerReview;