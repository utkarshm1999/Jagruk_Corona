import React from 'react';
import './intro.css';

function Intro(){
	const taketomain =()=>{
		window.localStorage.onboard="true";
		window.location.href="/main";
	}

	if(window.localStorage.onboard && window.localStorage.onboard=="true"){
		window.location.href="/main";
	}
	else{
		return(
			<nav class="navbar ">
			<div >
				<button type="button" class="page3-2" data-toggle="collapse" data-target="#myNavbar">
					  <img class="step-5" src="icon/menu.png"  alt="noimage"/>            
				</button>
			 </div>
			<div class="step">
			<p class="step-1">You can <br/> help make India<br/>Corona-free</p>
			<p class="step-2">In 3 Simple steps</p>
			<div class="step-34">
			<p class="step-3">1</p>
			<p class="step-4">Click a picture if you see <br/> anyone violating lockdown.</p>
			</div>
			<img class="step-5" src="icon/Group 35.png"  alt="noimage"/>
			<div class="step-34">
			<p class="step-3">2</p>
			<p class="step-4">Enter the address where the <br/>incident happened.</p>
			</div>
			<img class="step-5" src="icon/Group 35.png"  alt="noimage"/>
			<div class="step-34">
			<p class="step-3">3</p>
			<p class="step-4">Your contact details so our <br/> moderators can verify.</p>
			</div>
			<img class="step-5" src="icon/Group 35.png"  alt="noimage"/>
			<img class="step-6" src="icon/Group 42.png"  alt="noimage"/>
			<p class="step-7">Our moderators will inform <br/> authorities to resolve issue.</p>
			<button class="step-8" type="button" onClick={taketomain}>Next
				<img class="step-8-1" src="icon/xhfgjk.png"  alt="noimage"/>
			</button>
		</div>
		</nav>
		);
	}
   
}

export default Intro;