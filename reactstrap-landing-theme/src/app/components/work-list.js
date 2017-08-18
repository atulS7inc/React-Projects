import React from 'react';
import _ from 'lodash';

import WorkItem from './work-item.js';

//This data can be fetched from api call.
//Since our page is single page, this approach 
//will do the job
const WorkList = (props) => {
	const workItems = [
		{
			name: 'Buildings',
			path: '../../assets/images/buildings.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Fair',
			path: '../../assets/images/fair.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'City',
			path: '../../assets/images/city.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Rose',
			path: '../../assets/images/rose.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Skate',
			path: '../../assets/images/skate.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Track',
			path: '../../assets/images/track.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Golden Gate',
			path: '../../assets/images/goldengate.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		},
		{
			name: 'Girl in Field',
			path: '../../assets/images/girl-field.jpg',
			text: `Some quick example text to build on the card title and
			       make up the bulk of the card's content`
		}
	];

	function renderRow(row,i){
		var j = 1 + (i * 4);
		return(
			<div className="row">
				{row.map((item,k) => {
					j = j + 1;
					var k = j/10;
					return(<WorkItem text={item.text} path={item.path} delay={k} />);
				})}

			</div>
		);
	}

	return(
		<section id="work">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<h2>Our Latest Work</h2>
						<hr width="25%" />
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse
						   cillum dolore eu pariatur.</p>
					</div>
				</div>
				{_.chunk(workItems,4).map(renderRow)}
			</div>
		</section>
	);
}

export default WorkList;