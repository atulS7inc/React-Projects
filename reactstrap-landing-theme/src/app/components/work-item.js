import React from 'react';
import {Card, CardImg, CardBlock, CardImgOverlay, CardText} from 'reactstrap';

const WorkItem = (props) => {
	return(
		<div className="col-md-3 col-sm-6 wow fadeIn" data-wow-delay={props.delay+'s'}>
			<Card>
				<a href="#">
					<div className="img-work">
						<CardImg top width="100%" src={props.path} className="img-fluid" />
						<div className="img-overlay"></div>
					</div>
				</a>
				<CardBlock>
					<CardText>{props.text}</CardText>
				</CardBlock>
			</Card>
		</div> 
	);
}

export default WorkItem;