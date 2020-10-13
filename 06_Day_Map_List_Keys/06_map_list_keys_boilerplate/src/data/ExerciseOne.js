import React from 'react'

export default function ExercisesOne() {
    const imageColumn= {
        float: "left",
        backgroundColor: "coral",
        padding: "30px",
        width: '100%',
        height: '10%'
    }
    const imageColumn1= {
        float: "left",
        // width: "25%",
        backgroundColor: "coral",
        padding: "30px",
       
        height: '10%',

    }

    return (
        <div style={imageColumn} >
           
            <div style={imageColumn1}>
                <img src={require('./images/React.jpg')} width="150"  />
            </div>
            <div style={imageColumn1}>
                <img src={require('./images/css.jpg')}width="150"  />
            </div >
            <div style={imageColumn1}>
                <img src={require('./images/HTML.jpg')}width="150" />
            </div>
            <div style={imageColumn1}>
                <img src={require('./images/js.jpg')}width="150" />
            </div>
        </div>
    )
}
