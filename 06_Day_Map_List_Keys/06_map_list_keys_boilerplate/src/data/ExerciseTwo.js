import React from 'react'

export default function ExerciseTwo() {
    const card ={
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: '100%',
        margin: "auto",
        texAlign: "center"
      }
      
      const  image ={

        borderRadius: "50%"
      }
      

      
      const a= {
        textDecoration: "none",
        fontSize: "22px",
          color: "black",
          display: 'inline-block',
          textAlign: "center",
          backgroundColor: "coral",
          margin: '5px',
      
    
      }
      


    const user = {
        name: "Amare Yalew",
        title: "Developer",
        country:'Ethiopia',
        skill:['HTML','CSS','SASS','JS','React','Redux','Node','Mongo']
    }

    return (
        <div>
            <div  style={card}>
                <img src={require('./images/abc.jpg')} width="100px"height="100" style={image} />
                <h4>{user.name}</h4>
                <p>{user.title},{user.country}</p>
                <h4>Skills</h4>
                {user.skill.map(name => (
                    <button style={a}>
                        {name}
                    </button>

                ))
                
                    }
            </div>
        </div>

    )
}
