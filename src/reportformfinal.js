import React from 'react';
import './reportformfinal.css';

// function ReportFormFinal(){

//     function addsubmit(){
//         document.getElementById("repo1-3-2").style.display = "initial";
//      }

//     return(
       
//     )
// }

class ReportFormFinal extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		
		return(
			<div class="repo1">
			<button type="button" class="back" onClick={this.props.back}>
					<img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
			</button>
			<img src="icon/loading.gif" class="loader" id="loadergif" style={{display:this.props.load}}/>
				{/* <nav class="navbar ">
		  <div class="dropdown">
			  <button type="button" class="page3-2" data-toggle="collapse" data-target="#myNavbar">
					<img class="step-5" src="icon/menu.png"  alt="noimage"/>            
			  </button>
		   
			<div class="page3-1 dropdown-menu dropdown-menu-right " id="myNavbar">
			  <ul class=" abcd  ">
			  	<li class="abcd"><a href="#"><img class="nav-icon" src="icon/login-16 (1).png"  alt="noimage"/> Login</a></li><br/>
				<li class="abcd"><a href="/stats"><img class="nav-icon" src="icon/Group 14.png"  alt="noimage"/>Stats</a></li>
				<li class="abcd"><a href="about"><img class="nav-icon" src="icon/Group 15.png"  alt="noimage"/>What is a violation?</a></li>
				<li class="abcd"><a href="/usefullinks"><img class="nav-icon" src="icon/Group 16.png"  alt="noimage"/>Useful Links</a></li>
				<li class="abcd"><a href="/share"><img class="nav-icon" src="icon/Group 17.png"  alt="noimage"/>Share app with friends</a></li>
				<li class="abcd"><a href="#"><img class="nav-icon" src="icon/Group 19.png"  alt="noimage"/> Logout</a></li><br/>
			  </ul>
			</div>
		</div>
			<div class="repo1-1">
					<p class="repo1-1-1">Report violation </p>
					<img class="repo1-1-2" src="icon/hvxnx.png"  alt="noimage"/>
				</div>
		 </nav> */}
		<div class="repo1-2-add" onSubmit={this.props.sub}>
			 <div > <img class="repo1-2-1 edit2" src="icon/Group 54.png"  alt="noimage"/><img id="repo1-3-2" src="icon/Group.png"  alt="noimage"/></div>
		<form >
			<label for="Cont" class="contact page3-2-2">Your Contact Number</label><br/>
			<input type="number" class="cont page3-2-2-2" value={this.props.val.number} onChange={e=> this.props.cbfunc(e.target.value, 6)} name="Cont" required/><br/>
			{/* <label for="Title" class="page3-2-2">Category of Report</label><br/>
			<input type="text" class="cat page3-2-2-2" name="Title" value={this.props.val.} required /><br/> */}
			<label for="Details" class="page3-2-2">Details of the Incident</label><br/>
			<input type="text" class="Details page3-2-2-2" name="Details" value={this.props.val.desc} onChange={e=> this.props.cbfunc(e.target.value, 8)} placeholder="  30 people gather for some event" required /><br/>
	
			<input type="button" class="submit"  onClick={this.props.sub} value="Submit"/>
			
		</form> 
				 </div>
			
			
		</div> 
		)
	}
}

export default ReportFormFinal;