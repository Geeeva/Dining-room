import React from 'react';
import {NavLink} from 'react-router-dom';

const sideMenu = (props) => {
    return (
        <nav>
            <ul className="sidemenu">
                <NavLink className="title" to="/" exact ><li><b>The Dining Room</b></li></NavLink>
                <NavLink className="home" to="/" exact activeStyle={{fontWeight: '700'}}><li>Home</li></NavLink>
                <NavLink className="all" to="/restaurants/all" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>All</li></NavLink>
                <NavLink className="german" to="/restaurants/german" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>German</li></NavLink>
                <NavLink className="chinese" to="/restaurants/chinese" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>Chinese</li></NavLink>
                <NavLink className="american" to="/restaurants/american" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>American</li></NavLink>
                <NavLink className="pizza" to="/restaurants/pizza" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>Pizza</li></NavLink>
                <NavLink className="vegeterian" to="/restaurants/vegeterian" exact activeStyle={{fontWeight: '700'}}><li onClick={props.clicked}>Vegeterian</li></NavLink>
                <NavLink className="About" to="/about" exact activeStyle={{fontWeight: '700'}}><li>About</li></NavLink>
            </ul>
        </nav>
    )
}

export default sideMenu;