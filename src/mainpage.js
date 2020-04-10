import React from 'react';
import './mainpage.css';
import { GoogleLogout } from 'react-google-login';
import {GoogleLogin} from 'react-google-login';
import NavBar from './navbar';

function Mainpage(){
	return(<MainPage_/>)
}


class MainPage_ extends React.Component{
	constructor(props){
		super(props);
		this.state = 
		{
			isLogin : window.localStorage.login,
			deaths:"",
			recovered:"",
			cases:""
		};
		this.logOut = this.logOut.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
		this.responseGoogle_=this.responseGoogle_.bind(this);
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

	logOut(e){
		e.preventDefault();
		console.log("click");
		window.localStorage.login="false";
		this.setState({isLogin:"false"});
		window.localStorage.firstname=undefined;
		window.localStorage.secondname=undefined;
		window.localStorage.email=undefined;
		window.localStorage.uid=undefined;
		window.localStorage.uuid=undefined;
		window.localStorage.onboard= undefined;
	
	
	}


	responseGoogle (response) {
		// console.log("succes login");
		// console.log(response);
	  
		//setState ="1";
		window.localStorage.firstname=response.profileObj.givenName;
		window.localStorage.secondname=response.profileObj.familyName;
		window.localStorage.email=response.profileObj.email;
		window.localStorage.login="true";
		this.setState({isLogin:"true"});
		window.localStorage.uid = response.profileObj.googleId;
		fetch("https://demo-stormbreaker.herokuapp.com/users/is_exist",{
		  method: "POST",
		  firebase_id: window.localStorage.uid,
		  body: JSON.stringify({
			  firebase_id: window.localStorage.uid
		  })
	  })
	  .then(res => res.json())
	  .then(
	   (result) => {
		 
		 if(result.status==true){
			 // no register needed
			 // console.log("no register, adding uuid");
			 // console.log(result);
			 window.localStorage.uuid=result.user_id;
		 }
		 else{
			 //register needed
			 console.log("registering");
			 fetch("https://demo-stormbreaker.herokuapp.com/users/register",{
			   method: "POST",
			   firebase_id: window.localStorage.uid,
			   body: JSON.stringify({
				   firebase_id: window.localStorage.uid,
				   first_name: window.localStorage.firstname,
				   last_name: window.localStorage.secondname,
				   email: window.localStorage.email,
				   device_id:"1"
	
	
			   })
		   })
		   .then(res => res.json())
		   .then(
			(result) => {
				   // console.log("register result");
				   // console.log(result);
				   window.localStorage.uuid=result.user_id;
			  
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  // register unsucessful, show error & redirect to home page
			   window.location.href="/home";
	
			});
	
		 }
	   },
	   // Note: it's important to handle errors here
	   // instead of a catch() block so that we don't swallow
	   // exceptions from actual bugs in components.
	   (error) => {
		// console.log("error");
		 //console.log(error);
	   });	
	}

	responseGoogle_ (response) {
		// console.log("succes login");
		// console.log(response);
	  
		//setState ="1";
		window.localStorage.firstname=response.profileObj.givenName;
		window.localStorage.secondname=response.profileObj.familyName;
		window.localStorage.email=response.profileObj.email;
		window.localStorage.login="true";
		this.setState({isLogin:"true"});
		window.localStorage.uid = response.profileObj.googleId;
		fetch("https://demo-stormbreaker.herokuapp.com/users/is_exist",{
		  method: "POST",
		  firebase_id: window.localStorage.uid,
		  body: JSON.stringify({
			  firebase_id: window.localStorage.uid
		  })
	  })
	  .then(res => res.json())
	  .then(
	   (result) => {
		 
		 if(result.status==true){
			 // no register needed
			 // console.log("no register, adding uuid");
			 // console.log(result);
			 window.localStorage.uuid=result.user_id;
			 window.location.href="/formpage";
		 }
		 else{
			 //register needed
			 console.log("registering");
			 fetch("https://demo-stormbreaker.herokuapp.com/users/register",{
			   method: "POST",
			   firebase_id: window.localStorage.uid,
			   body: JSON.stringify({
				   firebase_id: window.localStorage.uid,
				   first_name: window.localStorage.firstname,
				   last_name: window.localStorage.secondname,
				   email: window.localStorage.email,
				   device_id:"1"
	
	
			   })
		   })
		   .then(res => res.json())
		   .then(
			(result) => {
				   // console.log("register result");
				   // console.log(result);
				   window.localStorage.uuid=result.user_id;
				   window.location.href="/formpage";

			  
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  // register unsucessful, show error & redirect to home page
			   window.location.href="/home";
	
			});
	
		 }
	   },
	   // Note: it's important to handle errors here
	   // instead of a catch() block so that we don't swallow
	   // exceptions from actual bugs in components.
	   (error) => {
		// console.log("error");
		 //console.log(error);
	   });	

	}

	failedGoogle = (response) =>{
		// console.log("failed");
		// console.log(response);
	  }

	taketoform =()=>{
		window.location.href="/formpage";
	}


	render(){
		if(this.state.isLogin=="true"){
			return(
				<div id="page2">
				<button type="button" class="back ">
						<img src="favicon.ico" id="logo-main" alt="noimage"/>            
				</button>
					<nav class="navbar ">
			<div class="dropdown">
				  <button type="button" class="page3-2" data-toggle="collapse" data-target="#myNavbar">
						<img class="step-5" src="icon/menu.png"  alt="noimage"/>            
				  </button>
			  
				<div class="page3-1 dropdown-menu dropdown-menu-right " id="myNavbar">
				  <ul class=" abcd  ">
{/* 		
					 <li class="abcd" id="login-li"> <GoogleLogin 
						 clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com" 
						 render={renderProps => ( <button type="button" class="login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}><img class="nav-icon" src="icon/login-16 (1).png"  alt="noimage"/> Login</button> )} 
						 buttonText="Login" 
						 onSuccess={this.responseGoogle} 
						 onFailure={this.failedGoogle} 
						 cookiePolicy={'single_host_origin'} 
						 isSignedIn={true}
			 
							   />  </li><br/> */}
					
					
					<li class="abcd"><a href="/stats"><img class="nav-icon" src="icon/Group 14.png"  alt="noimage"/>Stats</a></li>
					<li class="abcd"><a href="about"><img class="nav-icon" src="icon/Group 15.png"  alt="noimage"/>What is a violation?</a></li>
					<li class="abcd"><a href="/usefullinks"><img class="nav-icon" src="icon/Group 16.png"  alt="noimage"/>Useful Links</a></li>
					<li class="abcd"><a href="/share"><img class="nav-icon" src="icon/Group 17.png"  alt="noimage"/>Share app with friends</a></li>
					<li class="abcd" id="logout-li"><GoogleLogout
						render={renderProps => (
							<button type="button" class="login-button" onClick={this.logOut} disabled={renderProps.disabled}><img class="nav-icon" src="icon/Group 19.png"  alt="noimage"/> Logout</button>
						)}
						clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com"
						onLogoutSuccess={this.logOut}
					  /></li><br/>
		
					
				  </ul>
		
				</div>
				</div>	
			 </nav>
				<div id="page2-1">
					<div class="page2-11">
						<p class="page2-11-1"> {this.state.cases}</p>
						<p class="page2-11-2">Total cases</p>
					</div>
					<div class="page2-11">
						<p class="page2-11-1">{this.state.recovered}</p>
						<p class="page2-11-2">Cured</p>
					</div>
					<div class="page2-11 extra">
						<p class="page2-11-1">{this.state.deaths}</p>
						<p class="page2-11-2">Deaths</p>
					</div>
					{/* <div class="page2-11 extra">
						<p class="page2-11-1">12228</p>
						<p class="page2-11-2">Violations</p>
					</div> */}
				</div>
				<div class="page2-2">
					<p class="page2-1-1">If you find someone violating lockdown,<br/> help us inform <br/> authorities.</p>
					<button class="page2-1-2" type="button" onClick={this.taketoform}>Inform Violation</button>
					<p class="page2-1-3">We keep your identity anonymous all the time.</p>
					
				</div> 
			</div>
			);
		}
		else{
			return(
				<div id="page2">
				<button type="button" class="back ">
						<img src="favicon.ico" id="logo-main" alt="noimage"/>            
				</button>
					<nav class="navbar ">
			  <div >
				  <button type="button" class="page3-2" data-toggle="collapse" data-target="#myNavbar">
						<img class="step-5" src="icon/menu.png"  alt="noimage"/>            
				  </button>
			   </div>
				<div class="page3-1 dropdown-menu dropdown-menu-right " id="myNavbar">
				  <ul class=" abcd  ">
		
					 <li class="abcd" > <GoogleLogin 
						 clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com" 
						 render={renderProps => ( <button type="button" class="login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}><img class="nav-icon" src="icon/login-16 (1).png"  alt="noimage"/> Login</button> )} 
						 buttonText="Login" 
						 onSuccess={this.responseGoogle} 
						 onFailure={this.failedGoogle} 
						 cookiePolicy={'single_host_origin'} 
						//  isSignedIn={true}
			 
							   />  </li><br/>
					
					
					<li class="abcd"><a href="/stats"><img class="nav-icon" src="icon/Group 14.png"  alt="noimage"/>Stats</a></li>
					<li class="abcd"><a href="about"><img class="nav-icon" src="icon/Group 15.png"  alt="noimage"/>What is a violation?</a></li>
					<li class="abcd"><a href="/usefullinks"><img class="nav-icon" src="icon/Group 16.png"  alt="noimage"/>Useful Links</a></li>
					<li class="abcd"><a href="/share"><img class="nav-icon" src="icon/Group 17.png"  alt="noimage"/>Share app with friends</a></li>
					{/* <li class="abcd" id="logout-li"><GoogleLogout
						render={renderProps => (
							<button type="button" class="login-button" onClick={this.logOut} disabled={renderProps.disabled}><img class="nav-icon" src="icon/Group 19.png"  alt="noimage"/> Logout</button>
						)}
						clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com"
						onLogoutSuccess={this.logOut}
					  /></li><br/>
		 */}
					
				  </ul>
		
				</div>
				
			 </nav>
				<div id="page2-1">
				<div class="page2-11">
						<p class="page2-11-1"> {this.state.cases}</p>
						<p class="page2-11-2">Total cases</p>
					</div>
					<div class="page2-11">
						<p class="page2-11-1">{this.state.recovered}</p>
						<p class="page2-11-2">Cured</p>
					</div>
					<div class="page2-11 extra">
						<p class="page2-11-1">{this.state.deaths}</p>
						<p class="page2-11-2">Deaths</p>
					</div>
					{/* <div class="page2-11 extra">
						<p class="page2-11-1">12228</p>
						<p class="page2-11-2">Violations</p>
					</div> */}
				</div>
				<div class="page2-2">
					<p class="page2-1-1">If you find someone violating lockdown,<br/> help us inform <br/> authorities.</p>

					<GoogleLogin 
						 clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com" 
						 render={renderProps => ( <button class="page2-1-2" type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Inform Violation</button> )} 
						 buttonText="Login" 
						 onSuccess={this.responseGoogle_} 
						 onFailure={this.failedGoogle} 
						 cookiePolicy={'single_host_origin'} 
						 isSignedIn={true}
			 
							   />
					
					<p class="page2-1-3">We keep your identity anonymous all the time.</p>
					
				</div> 
			</div>
			);
		}
		
	}
}
export default Mainpage;