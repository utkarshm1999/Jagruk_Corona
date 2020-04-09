import React from 'react';
import './share.css';
import {WhatsappShareButton,WhatsappIcon} from 'react-share';


function Share(){
	function returntomain(){
		window.location.href='/main';
	}
    return(
        <div id="share">
		<button type="button" class="back " onClick={returntomain}>
		        <img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
		</button>
		<p class="share1">Share App with friends</p>
		<p class="share2">Let your friends be a part of the fight against the virus.</p>
		<img class="share3" src="icon/Group 55.png"  alt="noimage"/>  
		<WhatsappShareButton   url="Hi. Check out Jagruk Corona: A platform for reporting COVID-19 Lockdown violations. It is a student-run project who
		aim to direct all these report to officials and ensure quick action. Lets come
		together in this fight, and help our authorities. 
		Link: www.jargukcorona.in"> 	<button type="button" class="share4 ">Share</button></WhatsappShareButton>
	
	    </div> 
    )
}

export default Share;