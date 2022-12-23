import React from 'react'
import './App.css'
import Router from './Router'
import  {Provider} from "react-redux"
import {createStore} from 'redux'
import reducer from './components/reducers/redux'



function App(){

  const store = createStore(reducer)

  return(
    <div className='app'>
      <Provider store={store}>
         <Router/>
      </Provider>
    </div>
  )
}

export default App