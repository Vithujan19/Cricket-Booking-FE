import React, {useState} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import AdminDash from "./components/adminDash/AdminDash";
import AnnouncementForm from './components/announcement/Form';
import Announcement from './components/announcement/Announcement';
import AllUsers from './components/users/Users';
import AddStadium from "./components/stadium/AddStadium";
import Profile from './components/users/Profile';
import ViewStadium from './components/stadium/ViewStatdium';
import CreateMatch from "./components/match/createMatch";
import MatchDetail from "./components/match/MatchDetail";
import AddBooking from "./components/booking/AddBooking";
import ViewBooking from "./components/booking/ViewBooking";
import CreateTicket from "./components/ticket/CreateTicket";
import CustomerDash from "./components/customerDash/CustomerDash";
import Ticket from "./components/ticket/Ticket";

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/adminDashboard' component={AdminDash} />
                    <Route exact path='/userDashboard' component={CustomerDash} />
                    <Route exact path='/announce-form' component={AnnouncementForm} />
                    <Route exact path='/announcement' component={Announcement} />
                    <Route exact path='/users' component={AllUsers} />
                    <Route exact path='/add-stadium' component={AddStadium} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/stadium' component={ViewStadium} />
                    <Route exact path='/create-match' component={CreateMatch} />
                    <Route exact path='/match' component={MatchDetail} />
                    <Route exact path='/booking' component={AddBooking} />
                    <Route exact path='/view-booking' component={ViewBooking} />
                    <Route exact path='/create-ticket' component={CreateTicket} />
                    <Route exact path='/ticket' component={Ticket} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
