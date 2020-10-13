import React from 'react'

export default function ExerciseThree() {


    return (
        <div style={{ backgroundColor: "coral" }}>
            <h1>SUBSCRIBE</h1>
            <h4>Sign up with your email address to recive news and update </h4>
            <input placeholder="First name" style={{margin:'10px',borderRadius: "4px"}} />
            <input placeholder="Last name" style={{ margin: '5px',borderRadius: "4px" }} />
            <input placeholder="email" style={{ margin: '5px',borderRadius: "4px" }} />
            <div>
                <button style={{ backgroundColor: "#FF0000" }} color= 'read'>SUBSCRIBE</button>
            </div>
            
        </div>
    )
}
