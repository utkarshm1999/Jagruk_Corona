import React from 'react';
import './whatis.css';

function WhatIs(){
	function returntomain(){
		window.location.href='/main';
	}
    return(
        <div id="what">
		<button type="button" class="back " onClick={returntomain}>
		        <img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
		</button>
		<p class="what-1">What is a violation?</p>
		<p class="what-2">Quarantine is a way of separating and restricting people who have been exposed to a disease, such as COVID-19, to see if they too have become infected and get ill. This is why groups of people returning to their home countries after being in Wuhan, China, for example, or after being on a cruise ship where cases of COVID-19 were detected, were quarantined for around two weeks.</p>
		<p class="what-3">Other questions?</p>
		<p class="what-2">Quarantine is a way of separating and restricting people who have been exposed to a disease, such as COVID-19, to see if they too have become infected and get ill. This is why groups of people returning to their home countries after being in Wuhan, China, for example, or after being on a cruise ship where cases of COVID-19 were detected, were quarantined for around two weeks.</p>
	</div>
    )
}

export default WhatIs;