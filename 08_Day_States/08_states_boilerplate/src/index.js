import React, { Component } from 'react'
import Image from './Image';
import SelectCountry from './SelectCountry'

export default class App extends Component {
    state = {
        name: "Amare Yalew",
        date: new Date(),
        country: "Ethiopia",
        skill: ["html", "css", 'js'],
        colorHandler: true,
        backgroundColor: ""

    }




    render() {
     
        const backgroundHandler = () => {
            this.setState({ colorHandler: !this.state.colorHandler })

            if (this.state.colorHandler) {
                this.setState({ backgroundColor: "blue" })
            } else {
                this.setState({ backgroundColor: "" })
            }

        }
        return (
            <div style={{ backgroundColor: this.state.backgroundColor }}>
                <h1>Welcome to 30 Days Of React </h1>
                <h4>Getting Started React </h4>
                <p>{this.state.name}</p>
                <p>{this.state.date.getFullYear() + '-' + (this.state.date.getMonth() + 1) + '-' + this.state.date.getDate()}</p>
                <Image data={this.state} buttonH={backgroundHandler} />
                <SelectCountry />

            </div>



        )
    }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
