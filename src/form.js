import React, { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

function Form(){
  if(window.localStorage.login && window.localStorage.login=="true"){
    
    return( <NameForm/> );
  }
  else{
    window.location.href="/home";
  }
  
}


class NameForm extends React.Component {
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
       isActive:false
    };

  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    taketoreport(event){
        window.location.href="/report";
    }

    handleChange(val,c) {
      switch(c){
        case 1:
          this.setState({img:val});
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
  
    handleSubmit(event) {
      
      var data = new FormData();
      data.append("user_id", window.localStorage.uuid);
      data.append("title","title");
      data.append("address",this.state.address);
      data.append("city",this.state.city);
      data.append("pincode",this.state.pin);
      data.append("state",this.state.state);
      data.append("country",this.state.desc);
      data.append("image",this.state.img);
      this.setState({isActive:true});

      fetch("https://demo-stormbreaker.herokuapp.com/reports/register",{
                method: "POST",
                body: data
      })
      .then(res => res.json())
      .then(
        (result) => {
              // console.log("register report");
              // console.log(result);
              window.location.href="/submit";
              this.setState({isActive:true});

          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // register unsucessful, show error & redirect to home page
         
        

        });
      //console.log(this.state.address);
      event.preventDefault();
    }
  
    render() {
      return (
        // <form onSubmit={this.handleSubmit}>
        //   <label>
        //     Name:
        //     <input type="text" value={this.state.value} onChange={this.handleChange} />
        //   </label>
        //   <input type="submit" value="Submit" />
        // </form>


        <div class="page3">
          
          <LoadingOverlay active={this.state.isActive} spinner={<BounceLoader />} styles={{
        overlay: (base) => ({
          ...base,
          background: 'rgba(255, 0, 0, 0)'
        }),
        wrapper: (base) => ({
          ...base,
          background: 'rgba(255, 0, 0, 0)'
        })
        
      }} text='Loading your content...' className="page3" > 
                  <input type="image" onClick={this.taketoreport} class="page3-1" src="icon/Vector.png" />
                      <div class="page3-2">
                          <p class="page3-2-1"> Inform  </p>
                             
                          <form name='form-report' action="/form" onSubmit={this.handleSubmit} >
                              <label for="picture" class="upload">Upload a Picture of the event</label><br/>
                              <input type="file" class="img" src="icon/Group 7.png"  name="picture"  onChange={e=> this.handleChange(e.target.files[0], 1)}/>
                              <div class="after-upload"><button class="reupload" type="button" onclick="uploadagain()">Reupload</button>
                              <img id="upload-img" src="icon/VES_Awards_89_cropped 1.png"  alt="noimage"/></div>
                              <hr class="line"/>
                              <label for="Add" class="page3-2-2">Address of the event</label><br/>
                              <input type="text" class="add page3-2-2-2"  name="add" required value={this.state.address} onChange={e=> this.handleChange(e.target.value, 2)} /><br/>
                              
                              <label for="City" class="page3-2-2" >City</label>
                              <label for="State" class="page3-2-2-1">State</label>
                              <label for="Pin" class="page3-2-2-1">Pin</label><br/>
                              <input type="text" class="City page3-2-2-2" name="City" required value={this.state.city} onChange={e=> this.handleChange(e.target.value, 3)}/>
                              <input type="text" class="State page3-2-2-2" name="State" required value={this.state.state} onChange={e=> this.handleChange(e.target.value, 4)}/>
                              <input type="number" class="pin page3-2-2-2" name="Pin" required value={this.state.pin} onChange={e=> this.handleChange(e.target.value, 5)}/><br/>
                              
                              <label for="Cont" class="page3-2-2">Contact Number(Only for verification)</label><br/>
                              <input type="number" class="add page3-2-2-2" name="Cont" required value={this.state.number} onChange={e=> this.handleChange(e.target.value, 6)} /><br/>
                              
                              {/* <label for="Title" class="page3-2-2">Title</label><br/>
                              <input type="text" class=" add page3-2-2-2" name="Title" required value={this.state.title} onChange={e=> this.handleChange(e.target.value, 7)}/><br/> */}
                              
                              
                              <label for="Details" class="page3-2-2">Please provide a short description</label><br/>
                              <input type="text" class="Details page3-2-2-2" name="Details" placeholder="eg: Overcrowding at the grocery store" required value={this.state.desc} onChange={e=> this.handleChange(e.target.value, 8)}/><br/>
                              
                              <input type="submit" class="submit" value="Submit" />
                      </form>
                    </div>
           
                    </LoadingOverlay>

          </div> 
      );
    }
  }

export default Form;