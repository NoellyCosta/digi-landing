import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage1 from "../pages/HomePage1/HomePage1"
import HomePage2 from "../pages/HomePage2/HomePage2"
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage1 />
                </Route>
                <Route exact path={"/home2"}>
                    <HomePage2/>
                </Route>
                
               
            </Switch>
        </BrowserRouter>
    )
}

export default Router