
import React from 'react';
import './App.css';

function Event() {

    const [margin, setMargin] = React.useState("50%");

    const placedDiv = {
        width: "30%",
        height: "100px",
        backgroundColor: '#61dbfb',
        margin: `${margin }`
    }

    const [mousePosition, setMousePosition] = React.useState(placedDiv)

    const getRandomInt=()=> {
        return Math.floor(Math.random() * Math.floor(50));
    }
    
    const setStyle = () => {
        let margin=getRandomInt()+'%'
        setMargin(margin);
    
      };

    return (
      
            <div style={placedDiv} onMouseEnter={setStyle}>
                <h1>30 Days Of React</h1>  
        </div>
       
        )

   
  }
  

export default Event
