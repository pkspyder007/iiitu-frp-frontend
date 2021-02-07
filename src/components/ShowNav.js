import React, {useContext} from 'react'
import { authContext } from '../context/AuthContext'
import Navbar from "./Navbar";
import AdminSideNav from './SideNav/AdminSideNav';
import UserSideNav from './SideNav/UserSideNav';

export default function ShowNav() {
    const { state: auth } = useContext(authContext);

    if(!auth.loggedIn)
        return (<Navbar />)

    if(auth.loggedIn && auth.role === "admin")
     return <AdminSideNav />
    
     if(auth.loggedIn && auth.role === "user")
     return <UserSideNav />
}
