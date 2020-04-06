
import React from 'react';
import AddToHomescreen from 'react-add-to-homescreen';

class AddToHomescreen__ extends React.Component {
    constructor(props) {
      super(props);
  
  
      this.handleAddToHomescreenClick= this.handleAddToHomescreenClick.bind(this);
    
    }
    handleAddToHomescreenClick = () => {
      alert(`
        1. Open Share menu
        2. Tap on "Add to Home Screen" button`);
    };
    render() {
      return (
    <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />
      );
    }
  }

function AddToHomescreen_(){
   
        return( <AddToHomescreen__ /> );

}
export default AddToHomescreen_;