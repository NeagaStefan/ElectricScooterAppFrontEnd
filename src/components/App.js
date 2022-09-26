import React from "react";
import '../css/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import CreateNewScooter from "./CreateNewScooter";
import UpdateScooterComponent from "./UpdateScooterComponent";
import ViewUsersComponent from "./ViewUsersComponent";
import indexComponent from "./indexComponent";
import HistoryComponent from "./HistoryComponent";
import UpdateUserComponent from "./UpdateUserComponent";
import ScooterComponentV2 from "./ScooterComponentV2";

function App() {

    return (
        <div>
            <Router>
                    <HeaderComponent/>
                    <div className={"container"}>
                        <Switch>
                            <Route path= "/admin" exact component={indexComponent} />
                            <Route path= "/admin/scooters" exact component={ScooterComponentV2} />
                            <Route path= "/admin/generation/employee" component={CreateNewScooter} />
                            <Route path= "/admin/updating/scooter/:scooterId" component={UpdateScooterComponent} />
                            <Route path= "/admin/history" component={HistoryComponent} />
                            <Route path= "/admin/customers" component={ViewUsersComponent} />
                            <Route path= "/admin/updating/customer/:customerId" component={UpdateUserComponent} />
                        </Switch>
                    </div>
                    <FooterComponent/>
            </Router>
        </div>

    );

}


export default App;