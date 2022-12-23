import React from 'react'
import './footer.css'
import { useDispatch } from 'react-redux'

function Footer(){

   const dispatch = useDispatch()

   function reset(){
      dispatch({
         type:"reset"
      })
   }


    return(
       <footer className='footer'>
          <button onClick={reset} className='bu'>RESET</button>
          <button className='bu'>RULES</button>
       </footer>
    )
}


export default Footer