import React from 'react'
import { countriesData } from './Data'


let data = countriesData




export default function SelectedCountry() {
    const [state, setState] = React.useState(data);
    const [cou, setCou] = React.useState({ country: "", lodding: false })

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
    const imgS = {
        width: "10%",
        hight: "10%",
        boxShadow: "1px 1px 1px 1px #cccd",


    }

    const countrySelector = () => {
       
console.log(cou)
        setCou(prevState => ({
            ...prevState,
            lodding: true
        }))
        let country = state[Math.floor(Math.random() * state.length)]

        setCou(prevState => ({
            ...prevState,
            country:country
        }))
       // setCou((prevState)=>({...prevState,lodding:false}))
        
        console.log(cou)
    
    }


    return (
        <div>
            {
                cou.lodding ?
                    <div>
                        
                            <img src={cou.country.flag} style={imgS} />
                      
                        <p>Capital:{cou.country.capital}</p>
                        <p>Language:{cou.country.languages}</p>
                        <p>Population:{cou.country.population}</p>
                        <p>Currency:{cou.country.currency}</p>
                    </div>
                    : null
            }

            <button style={buttonStyles} onClick={() => countrySelector()}>Select Country </button>

        </div>
    )
}
