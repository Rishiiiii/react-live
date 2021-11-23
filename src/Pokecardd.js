import React, { Component } from 'react'
import './Pokecard.css'
const POKI_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
export class Pokecardd extends Component {
    render() {
        let imgSrc=`${POKI_API}${this.props.id}.png`
        return (
            <div className="Pokecard" >
          <h1 className="Pokecard-title"> {this.props.name}</h1>
          <img className="Pokecard-image" Src={imgSrc} alt={this.props.name}  />
          <div className="Pokecard-data"> type: {this.props.type}</div>
          <div className="Pokecard-data"> exp : {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecardd
