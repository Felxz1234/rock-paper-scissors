import React from 'react'
import './header.css'

function Header(){
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
                <h2 className='pontos'>2</h2>
            </div>
        </header>
    )
}


export default Header