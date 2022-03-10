import React from "react";
import { NavLink } from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import {TiArrowShuffle} from "react-icons/ti";

export default function NavBar() {
  return (
    <header className="app-header">
      <div className="top-nav">
        <h2 className="logo"><span>Flex</span>Mind<i className="nav-icon"><TiArrowShuffle/></i></h2>
       
        <div className="searchBox">
            <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" href="#">
                <i className="material-icons">
                    search
                </i>
            </button>
        </div>
       
        <h4 className="auth"><BiLogIn/></h4>
      </div>
      <div className="main-nav">
        <NavLink className={"nav-link"} to='/'>Home</NavLink>
        <NavLink className={"nav-link"} to='/memo'>Memo</NavLink>
        <NavLink className={"nav-link"} to='/games'>Games</NavLink>
      </div>
    </header>
  )
}
