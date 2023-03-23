import { NavLink } from "react-router-dom";
import Style from "./GlobalNavStyle.module.css";

export const GlobalNav = () => {
    return <nav className={Style.container}>
        <NavLink to="/list" >Dashboard</NavLink>
        <NavLink to="/add" >Add User</NavLink>
    </nav>
} 