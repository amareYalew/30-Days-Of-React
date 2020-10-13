import React from 'react'

export default function ExirciseFour() {

    const backgroundColor=["#FF0000","#00FF00","#0000FF","#808080"]
    return (
        <div>
            {
                backgroundColor.map(color => {
                    return (<div style={{ backgroundColor:color,padding:10 }}><p>{color}</p></div>)
               }) 
            }
        </div>
    )
}
