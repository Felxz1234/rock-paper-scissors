import Play from './components/plays/play'
import Iniitial from './components/innitialPlay/innitial'

import { BrowserRouter,Route,Routes } from "react-router-dom"

export default function Router(){
    return(
        <div className="routes">
             <BrowserRouter>
                <Routes>
                  <Route  path="/play" element={<Play/>}></Route>
                  <Route  path="/" element={<Iniitial/>}></Route>
                </Routes>
             </BrowserRouter>
        </div>
    )
}



