import React, {useContext} from 'react'
import { authContext } from '../context/AuthContext'
import Navbar from "./Navbar";
import SideNav from './SideNav/SideNav';

export default function ShowNav() {
    const { state: auth } = useContext(authContext);

    if(!auth.loggedIn)
        return (<Navbar />)

    if(auth.loggedIn && auth.role === "admin")
     return <SideNav />
    
     if(auth.loggedIn && auth.role === "user")
     return <div>User Nav</div>
}
