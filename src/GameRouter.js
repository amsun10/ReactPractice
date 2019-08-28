import {BrowserRouter, Route} from "_react-router-dom@5.0.1@react-router-dom";
import Welcome from "./Welcome";
import Game from "./Game";
import React from "react";


function GameRouter() {
 return (
     <BrowserRouter>
         <div>
             <Route path="/"  exact component={Welcome}></Route>
             <Route path="/game" exact component={Game}></Route>
         </div>
     </BrowserRouter>
 )
}

export default GameRouter