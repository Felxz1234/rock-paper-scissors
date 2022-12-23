import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'


function Header(props){

    const dados = useSelector((state)=>{return state})

    return(
        <header className="header ">
            <div className='title'>
                <h4>
                    ROCK <br></br>
                    PAPER <br></br>
                    SCISSORS
                </h4>                
            </div>
            <div className='options'>
                <p>SCORE</p>
                <h2 className='pontos'>{dados.pontos}</h2>
            </div>
        </header>
    )
}


export default Header