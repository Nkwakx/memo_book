import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="app-header">
      <div className="top-nav">
        <h2 className="logo">FlexMind</h2>
        <h4 className="auth">Auth</h4>
      </div>
      <div className="main-nav">
        <NavLink className={"nav-link"} to='/'>Home</NavLink>
        <NavLink className={"nav-link"} to='/memo'>Memo</NavLink>
        <NavLink className={"nav-link"} to='/games'>Games</NavLink>
      </div>
    </header>
  )
}
