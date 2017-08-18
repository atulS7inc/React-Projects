import React from 'react';
import {Col, ListGroup, ListGroupItem, Card,
		CardHeader, CardBlock, Button} from 'reactstrap';

const PricingPlan = ({plan}) => {
	// Text is not centered, have to resolve later

	const wowData = {};
	if(plan.planType == 'standard'){
		wowData['data-wow-delay']='0.4s';
		wowData['data-wow-duration']='1.5s';
	}

	const className1 = `mt-2 ${plan.planType=='standard'?'wow tada':''}`;
	const className2 = ` text-uppercase card-header ${ plan.planType == 'standard'? plan.planType: ''}`;
	return (
		<Col xs="12" md="4" className={className1} {...wowData}>
			<Card>
				<CardHeader className={className2}>
					{plan.planName}
				</CardHeader>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<strong>{plan.profiles}</strong>&nbsp;Profiles
					</ListGroupItem>
					<ListGroupItem>
						<strong>${plan.fee}</strong>&nbsp; / Months
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.storage}</strong>&nbsp; Storage
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.bandWidth}</strong>&nbsp; BandWidth
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.ftp}</strong>&nbsp; FTP  Accounts
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.integration}</strong>&nbsp; Integration
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.customization}</strong>&nbsp; Customization
					</ListGroupItem>
					<ListGroupItem>
						<strong>{plan.support}</strong>&nbsp; Support
					</ListGroupItem>
				</ListGroup> 
				<CardBlock>
					<Button outline color="info" block>SIGN UP</Button>
				</CardBlock>
			</Card>
		</Col>
	);
}

export default PricingPlan;