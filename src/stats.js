import React from 'react';
import './stats.css';

function Stats(){
	
    return(
        <Stats_/>
    );
}

class Stats_ extends React.Component{
	constructor(props){
		super(props);
		this.state = 
		{
			deaths:"",
			recovered:"",
			cases:""
		};
		fetch("https://api.rootnet.in/covid19-in/stats/latest",{
		  method: "GET",
		//   firebase_id: window.localStorage.uid,
		//   body: JSON.stringify({
		// 	  firebase_id: window.localStorage.uid
		//   })
	  })
	  .then(res => res.json())
	  .then(
	   (result) => {
			console.log(result);
			this.setState({
				recovered:result.data.summary.discharged,
				deaths:result.data.summary.deaths,
				cases: result.data.summary.total
			})
		},
		// Note: it's important to handle errors here
		// instead of a catch() block so that we don't swallow
		// exceptions from actual bugs in components.
		(error) => {
		// console.log("error");
		//console.log(error);
		});	
	}
	returntomain(){
		window.location.href='/main';
	}
	render(){
		return( 
				<div id="stats">
				<button type="button" class="back " onClick={this.returntomain}>
						<img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
				</button>
				<p class="stats-1">Corona Virus Stats</p>
				<div id="page2-1">
					<div class="page2-11">
						<p class="page2-11-1">{this.state.cases}</p>
						<p class="page2-11-2">Total cases</p>
					</div>
					<div class="page2-11">
						<p class="page2-11-1">{this.state.recovered}</p>
						<p class="page2-11-2">Cured</p>
					</div>
					<div class="page2-11 ">
						<p class="page2-11-1">{this.state.deaths}</p>
						<p class="page2-11-2">Deaths</p>
					</div>
					{/* <div class="page2-11 ">
						<p class="page2-11-1">12228</p>
						<p class="page2-11-2">Violations</p>
					</div>
					<div class="page2-11">
						<p class="page2-11-1">200</p>
						<p class="page2-11-2">Total reports</p>
					</div> */}
				</div>
			</div> 
		)


	}


}

export default Stats;