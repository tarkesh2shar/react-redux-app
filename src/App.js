import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Dummy1 from './components/dummy';
import Dummy2 from './components/dummy2';


export default class App extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>

                <Switch>

                <Route path="/dummy1" component={Dummy1}/>
                <Route path="/" component={Dummy2}/>
                </Switch>
                
                </BrowserRouter>
            </div>
        );
    }

}