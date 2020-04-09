import React from 'react';
import './reportform.css';
import ReportFormFinal from './reportformfinal';

function ReportForm(){
	if(window.localStorage.login=="true"){
		return(
			<FullForm />
		);
	}
    else{
		window.location.href='/main';
	}
}

class FullForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = 
		{state: '',
		 address: '',
		 city: '',
		 pin:'',
		 number:'',
		 title:'',
		 desc:'',
		 img:null,
		 isActive:false,
		 filled:false,
		 obj: null,
		 load : "none"
	  };
	  this.handleChange = this.handleChange.bind(this);
	  this.sub1=this.sub1.bind(this);
	  this.finalsub=this.finalsub.bind(this);
	  this.back=this.back.bind(this);
	}
	sub1(){
		this.setState({filled : true});
		console.log("here yea");
		//this.state.obj= <ReportFormFinal />
	}

	back(){
		this.setState({filled:false});
	}

	finalsub(e){
	//	e.preventdefault();
		document.getElementById("repo1-3-2").style.display = "initial";
		var data = new FormData();
		data.append("user_id", window.localStorage.uuid);
		data.append("title","title");
		data.append("address",this.state.address);
		data.append("city",this.state.city);
		data.append("pincode",this.state.pin);
		data.append("state",this.state.state);
		data.append("country",this.state.desc);
		data.append("image",this.state.img);
		this.setState({load:"block"});
		
		fetch("https://demo-stormbreaker.herokuapp.com/reports/register",{
				  method: "POST",
				  body: data
		})
		.then(res => res.json())
		.then(
		  (result) => {
				// console.log("register report");
				// console.log(result);
				this.setState({load:"none"});

				window.location.href="/submit";
				
  
			
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			// register unsucessful, show error & redirect to home page
		   
		  
  
		  });
		//console.log(this.state.address);
		
	}
	handleChange(val,c) {
		console.log(val);
		

		//document.getElementById("uploaded-img").src= val.name;
	  switch(c){
		case 1:
		  this.setState({img:val});
		  var reader = new FileReader();

		  var selectedFile = val;

		  document.getElementById("uploaded-img").title = selectedFile.name;

		  reader.onload = function(event) {
			  document.getElementById("uploaded-img").src = event.target.result;
		  };

		  reader.readAsDataURL(selectedFile);
		  break;
		case 2:
		  this.setState({address:val});
		  break;
		case 3:
		  this.setState({city:val});
		  break;
		case 4:
		  this.setState({state:val});
		  break;
		case 5:
		  this.setState({pin:val});
		  break;
		case 6:
		  this.setState({number:val});
		  break;
		case 7:
		  this.setState({title:val});
		  break;
		case 8:
		  this.setState({desc:val});  
		  break;
	  }
	
	}
	render(){
		if(this.state.filled == false){
			this.state.obj= <Form1 cbfunc={this.handleChange} val={this.state} sub={this.sub1}/>
		}
		else{
			this.state.obj=<ReportFormFinal sub={this.finalsub} val={this.state} cbfunc={this.handleChange} back={this.back} load={this.state.load}/>
		}

		return(this.state.obj);
	}
}
class Form1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = 
		{state: '',
		 address: '',
		 city: '',
		 pin:'',
		 number:'',
		 title:'',
		 desc:'',
		 img:null,
		 isActive:false,
		 filled:false
	  };
	//  this.handleChange = this.handleChange.bind(this);
	  this.addsubmit = this.addsubmit.bind(this);
	  this.fileuploaded = this.fileuploaded.bind(this);
	  this.uploadagain = this.uploadagain.bind(this);
	  
	}
	

	taketomain(){
		window.location.href='/main';
	}
    fileuploaded(){
        document.getElementById("upload-img").style.display = "none";
        document.getElementById("after-upload").style.display = "block";
        // document.getElementById("repo1-2-2").style.display = "initial";
        // //document.getElementById("repo1-1-2").style.display = "none";
		// document.getElementById("repo1-1-21").style.display = "block";
		
    }
    
   uploadagain(){
        document.getElementById("upload-img").style.display ="block" ;
        document.getElementById("after-upload").style.display = "none";
        // document.getElementById("repo1-2-2").style.display = "none";
        // document.getElementById("repo1-1-2").style.display = "block";
        // document.getElementById("repo1-1-21").style.display = "none";
            
    }
	addsubmit(){
		//document.getElementById("repo1-3-2").style.display = "initial";
		console.log("yea");
		this.state.filled=true;
		return false;
 	}
	  
	
	 
	  render(){
			return(
				<div class="repo1">
				<button type="button" class="back " onClick={this.taketomain}>
						<img class="back-1" src="icon/Vector.png"  alt="noimage"/>            
				</button><br/><br/>
					{/* <nav class="navbar ">
			  <div >
				  <button type="button" class="page3-2" data-toggle="collapse" data-target="#myNavbar">
						<img class="step-5" src="icon/menu.png"  alt="noimage"/>            
				  </button>
			   </div>
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
				<div class="repo1-1">
						<p class="repo1-1-1">Report violation </p>
						<img id="repo1-1-2" src="icon/Group 50.png"  alt="noimage"/>
						<img id="repo1-1-21" src="icon/1 filed.png"  alt="noimage"/>
					</div>
			 </nav> */}
			<div class="repo1-2">
				 <div class="ua1"> <img class="repo1-2-1" src="icon/Group 52.png"  alt="noimage"/><img id="repo1-2-2" src="icon/Group.png"  alt="noimage"/></div>
				
						<label for="file-input">
							<p class="upload-pic">Upload Picture</p><img  id="upload-img" src="icon/Group 7.png" onClick={this.fileuploaded}  alt="noimage"/>
						</label> 
						<input  id="file-input" type="file" onChange={e=> this.props.cbfunc(e.target.files[0], 1)}/>
		
						<div id="after-upload">
							<button class="reupload" type="button" onClick={this.uploadagain}>Reupload</button>
							<img id="uploaded-img"  src=""  alt="noimage"/>
						</div>
				</div>
				 <div class="repo1-3 "><div class="ua2">  <img class="repo1-2-1" src="icon/Group 53.png"  alt="noimage"/><img id="repo1-3-2" src="icon/Group.png"  alt="noimage"/></div>
				<form action="" onSubmit={this.addsubmit} onsubmit="return false;">
					<label for="Add" class="page3-2-2">Address</label><br/>
					<input type="text" class="add page3-2-2-2"  name="add" value={this.props.val.address} onChange={e=> this.props.cbfunc(e.target.value, 2)} placeholder="  Address where the violation happened" required/><br/>
						
						<label for="City" class="page3-2-2">City</label>
						
						
						<input type="text" class="City page3-2-2-2" name="City" value={this.props.val.city} onChange={e=> this.props.cbfunc(e.target.value, 3)} required/>
						<label for="State" class="page3-2-2-1">State</label><br/>
						<input type="text" class="State page3-2-2-2" name="State" required value={this.props.val.state} onChange={e=> this.props.cbfunc(e.target.value, 4)}/><br/>
						<label for="Pin" class="page3-2-2-1">Pin</label><br/>
						<input type="number" class="pin page3-2-2-2" name="Pin" required value={this.props.val.pin} onChange={e=> this.props.cbfunc(e.target.value, 5)}/><br/>
					 	<input type="button" class="submit"  onClick={this.props.sub} value="Next     >"/>
				</form> 
				</div>
			
			</div>
			  )
		
		  
	  }
}



export default ReportForm;