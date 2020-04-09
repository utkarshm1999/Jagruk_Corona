import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from 'react-router-dom';
import GoogleLogout from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';
import Report from './report';
import { useGoogleLogin } from 'react-google-login';


const googleConfig = {
  clientId: '916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: 'EEWeOXFIARPTJQ3M0X_DM-sb', // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'https://me.jc.com/login' // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];



function App() {
  
  const responseGoogle = (response) => {
    // console.log("succes login");
    // console.log(response);
  
    //setState ="1";
    window.localStorage.firstname=response.profileObj.givenName;
    window.localStorage.secondname=response.profileObj.familyName;
    window.localStorage.email=response.profileObj.email;
    window.localStorage.login="true";
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



    window.location.href="/intro";
    
}
// const { signIn, loaded } = useGoogleLogin({
//   onSuccess,
//   clientId,
//   cookiePolicy,
//   loginHint,
//   hostedDomain,
//   autoLoad,
//   isSignedIn,
//   fetchBasicProfile,
//   redirectUri,
//   discoveryDocs,
//   onFailure,
//   uxMode,
//   scope,
//   accessType,
//   responseType,
//   jsSrc,
//   onRequest,
//   prompt
// })


  const failedGoogle = (response) =>{
    // console.log("failed");
    // console.log(response);
  }
    if(window.localStorage.login && window.localStorage.login=="true"){
      window.location.href="/intro";
    }
    else{
      return (
        <div class="page1">
        <div class="intro">
          <p class="intro-1">Let’s <br/> make India Corona-free</p>
          <p class="intro-2">Inform violations and be a responsible citizen</p>
          <p class="intro-3">Help enforce social distancing and hygiene in your community.</p>
        </div>
        <div class ="log">
        <GoogleLogin 
          clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com" 
          render={renderProps => ( <button class="but" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google
          <img id="google_logo" src="icon/Google.png"  alt="noimage"></img></button> )} 
          buttonText="Login" 
          onSuccess={responseGoogle} 
          onFailure={failedGoogle} 
          cookiePolicy={'single_host_origin'} 
          // isSignedIn={true}
        
          />
          <p class="or">Or</p>
             <a href="/intro"><p id="skip">Skip Login</p></a>
           </div>  
        </div>
    
      );
    }
    
  
  
}


export default App;
