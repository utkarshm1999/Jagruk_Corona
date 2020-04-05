import React, { useState } from 'react';

function Submit(){
	const taketoform =()=>{
		window.location.href="/form";
	}

	const taketoreport =()=>{
		window.location.href="/report";
	}
	if(window.sessionStorage.login && window.sessionStorage.login=="true"){
		return(
			<div class="last">
			<img class="last-1" src="icon/rush-18 1.png" alt="noimage"/>
			<p class="last-2">Thank you <br/> for your help</p>
			<p class="last-3">Our volunteers will verify<br/> the incident and inform the<br/> authorities. </p>
			<button class="last-4" type="button" onClick={taketoform}>Report Another</button>
			<button class="last-5" type="button" onClick={taketoreport}>Home</button>
		</div>
		);
	}
	else{
		window.location.href="/home";
	}
    
}

export default Submit;