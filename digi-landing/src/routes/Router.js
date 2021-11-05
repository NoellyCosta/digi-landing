import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage1 from "../pages/HomePage1/HomePage1"

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage1 />
                </Route>
                
               
            </Switch>
        </BrowserRouter>
    )
}

export default Router