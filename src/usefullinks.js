import React from 'react';
import './usefullinks.css';

function UsefulLinks(){
	function returntomain(){
		window.location.href='/main';
	}
    return(
        <div id="use">
		<button type="button" class="back " onClick={returntomain}>
		        <img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
		</button>
		<p class="use-1">Useful Links</p>
		<p class="use-2">All the things you need to know <br/> to stay corona free.</p>
		<div class="use-3"><p class="use-3-1">COVID-19 FAQs</p><p class="use-3-2">emro.who.int</p></div>
		<div class="use-3"><p class="use-3-1">Covid-19 symptoms</p><p class="use-3-2">mayoclinic.org</p></div>
	</div>
    )
}

export default UsefulLinks;

