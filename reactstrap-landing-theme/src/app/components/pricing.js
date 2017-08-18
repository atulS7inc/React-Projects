import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import _ from 'lodash';

import PricingPlan from './pricing-plan.js';

const Pricing = (props) => {
	
	const plans = [
		{
			planType:'basic',
			planName:'Basic',
			profiles:2,
			fee:0,
			storage:'1 GB',
			bandwidth:'10 GB',
			ftp:1,
			integration:'Website',
			customization:'Basic',
			support:'Email'
		},
		{
			planType:'standard',
			planName:'Standard',
			profiles:100,
			fee:29,
			storage:'50 GB',
			bandwidth:10,
			ftp:'',
			integration:'Website',
			customization:'Advance',
			support:'Call'
		},
		{
			planType:'pro',
			planName:'Pro',
			profiles:'Unlimited',
			fee:39,
			storage:'1 TB',
			bandwidth:'Unlimited',
			ftp:100,
			integration:'Website',
			customization:'Advance',
			support:'24x7 Call'
		}

	];


	function renderPlans(plan){
		return(
			<PricingPlan plan={plan} />
		);
	}

	return (
		<section id="pricing">
			<Container className="text-center">
				<Row>
					<Col md="12">
						<h2>Pricing</h2>
						<hr className="mx-auto text-center" width="25%" />
						<p className="lead">Pricing structure for our services that can not be beaten. </p>	
					</Col>
				</Row>

				<Row>
					{plans.map(renderPlans)}
				</Row>
			</Container>
		</section>
	);
} 

export default Pricing;