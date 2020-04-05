import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

function logOut(e){
    e.preventDefault();
    console.log("click");
    window.sessionStorage.login="false";
    window.sessionStorage.firstname=undefined;
    window.sessionStorage.secondname=undefined;
    window.sessionStorage.email=undefined;
    window.sessionStorage.uid=undefined;
    window.sessionStorage.uuid=undefined;
    window.location.href="/home";

}

function Report(){
    //console.log("hey");
    
    
    if(window.sessionStorage.login && window.sessionStorage.login=="true"){
       // console.log(window.sessionStorage.email);

       fetch("https://demo-stormbreaker.herokuapp.com/users/is_exist",{
           method: "POST",
           firebase_id: window.sessionStorage.uid,
           body: JSON.stringify({
               firebase_id: window.sessionStorage.uid
           })
       })
       .then(res => res.json())
       .then(
        (result) => {
          
          if(result.status==true){
              // no register needed
              // console.log("no register, adding uuid");
              // console.log(result);
              window.sessionStorage.uuid=result.user_id;
          }
          else{
              //register needed
              console.log("registering");
              fetch("https://demo-stormbreaker.herokuapp.com/users/register",{
                method: "POST",
                firebase_id: window.sessionStorage.uid,
                body: JSON.stringify({
                    firebase_id: window.sessionStorage.uid,
                    first_name: window.sessionStorage.firstname,
                    last_name: window.sessionStorage.secondname,
                    email: window.sessionStorage.email,
                    device_id:"1"


                })
            })
            .then(res => res.json())
            .then(
             (result) => {
                    // console.log("register result");
                    // console.log(result);
                    window.sessionStorage.uuid=result.user_id;
               
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

        const taketoform =() =>{
            window.location.href="/form";
        }
          
        return(
            <div id="page2">
            <div id="page2-1">
                <p class="page2-1-1">Help the nation in<br/> maintaining social<br/>distancing. If you find<br/> any violation against <br/>the guidelines, report <br/> and help us <br/> take it forward.</p>
                <button class="page2-1-2" type="button" onClick={taketoform}>Inform</button>
                <p class="page2-1-3">We will keep your identity anonymous all the time.</p>
            </div>
            
              {/* <GoogleLogout
                render={renderProps => (
                  <button
                    className="logout-button"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                )}
                clientId="916995490002-h4438ccl1o2hth8nk1eipja9ijvo79g6.apps.googleusercontent.com"
                onLogoutSuccess={logOut}
              /> */}

            {/* <div class="page2-2">
                  <p class="page2-2-1">Your previous reports</p>
                  <div class="page2-2-2">Community Gathering salfjaisfjiodfpkasifjasuifhduyhfidajfuiasjofouias</div>
                  <div class="page2-2-2">Community Gathering</div>
                  <div class="page2-2-2">Community Gathering</div>
                  <div class="page2-2-2">Community Gathering</div>
              </div>  */}
            </div>
            

        );
        
    }
    else{
        window.location.href="/home";
    }
}  
    

export default Report;
