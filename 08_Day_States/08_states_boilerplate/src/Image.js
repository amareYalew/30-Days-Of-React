import React from 'react'

export default function Image({ data: { skill, name }, buttonH }) {
    const img = {
        borderRadius: "50%",
        hight: '30px',
        width: '20%'
    }
    console.log(skill, name)

    const buttonStyles = {
        backgroundColor: '#61dbfb',
        padding: 10,
        border: 'none',
        borderRadius: 5,
        margin: 3,
        cursor: 'pointer',
        fontSize: 18,
        color: 'white',
    }
    const backgroundHandler = () => {
        buttonH()
    }

    return (


        <div>
            <p>Prerequisite  to learn react </p>
            Basic Skill {skill.map((skill, i) => (

                <p>  {skill}</p>
            ))}
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt="new"
                style={img}
            />
            <h4>{name}</h4>
            <button style={buttonStyles}>Show Time </button>
            <button style={buttonStyles}>Show Time </button>
            <button style={buttonStyles} onClick={backgroundHandler}>Change Background </button>

        </div>
    )
}
