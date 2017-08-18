import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
	function average(data){
		return Math.round(
			data.reduce((prev, current) => prev+current)/data.length);
	}

	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div> {average(props.data)} {props.unit} </div>
		</div>
	);
}