
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import Messages from "./components/Messages/Messages";
import Reservations from "./components/Reservations/Reservations";
import ListSpace from "./components/Menu/list_space";
import MyVehicle from "./components/Menu/my_vehicle";
import MyProfile from "./components/Menu/my_profile";

export default (
    <Switch>
        {/* <Route path='/' component={Login} exact /> */}
        {/* <Route path='/search' component={Search} exact /> */}
        <Route path='/' component={Search} exact />
        <Route path='/messages' component={Messages} />
        <Route path='/reservations' component={Reservations} />
        <Route path='/listspace' component={ListSpace} />
        <Route path='/myvehicle' component={MyVehicle} />
        <Route path='/myprofile' component={MyProfile} />
    </Switch>
)