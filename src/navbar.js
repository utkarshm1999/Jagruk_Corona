import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {GoogleLogin} from 'react-google-login';
import './mainpage.css';


function NavBar(){
    return(<NavBar_/>)
}

class NavBar_ extends React.Component{
    constructor(props) {
		super(props);
		this.state = 
		{
            isLogin : window.localStorage.login
	    };
	
	  
    }
    logOut(e){
		e.preventDefault();
		console.log("click");
        window.localStorage.login="false";
        this.setState({isLogin: "false"});
		window.localStorage.firstname=undefined;
		window.localStorage.secondname=undefined;
		window.localStorage.email=undefined;
		window.localStorage.uid=undefined;
		window.localStorage.uuid=undefined;
		window.localStorage.onboard= undefined;
		window.location.href="/home";
	
	}


    responseGoogle = (response) => {
		// console.log("succes login");
		// console.log(response);
	  
		//setState ="1";
		window.localStorage.firstname=response.profileObj.givenName;
		window.localStorage.secondname=response.profileObj.familyName;
		window.localStorage.email=response.profileObj.email;
        window.localStorage.login="true";
        this.setState({isLogin: "true"});
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

	failedGoogle = (response) =>{
		// console.log("failed");
		// console.log(response);
	  }
    render(){
        

    
        return(
            <div class="page3-1 dropdown-menu dropdown-menu-right " id="myNavbar">
                <ul class=" abcd  ">
{/*     
            <li class="abcd"> <GoogleLogin 
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
            <li class="abcd"><GoogleLogout
                render={renderProps => (
                    <button type="button" class="login-button" onClick={this.logOut} disabled={renderProps.disabled}><img class="nav-icon" src="icon/Group 19.png"  alt="noimage"/> Logout</button>
                )}
                clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com"
                onLogoutSuccess={this.logOut}
                /></li><br/>

                </ul>

                </div>
        )
    }
       

}

export default NavBar;