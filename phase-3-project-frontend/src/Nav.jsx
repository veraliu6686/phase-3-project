import React,{useState} from "react";
import {Link} from 'react-router-dom'

function Nav ({login}){

    const [checked, setChecked] = useState(false)
    const handleClick=()=>{
        setChecked(!checked)
    }

    return (
        <div>
            <img id = "logo" src = "./src/image/TVTLONGlogo.png" alt = "logo"/>
            <input type="checkbox" id="menu-btn" onClick={handleClick} checked={checked}/>
            <label className ="menu-btn" htmlFor="menu-btn" >
                <i className="fa fa-bars" aria-hidden="true"></i>
            </label>
            <div className ="wrapper" onClick={handleClick}>
                <nav className = "menu">
                    <ul className ='menu'>
                        <li><Link to="/" className ="nav-item"> Market Place</Link></li>
                        {login ?
                        <>
                            <li><Link to="/profile" className ="nav-item">Profile</Link></li>
                            <li>Logout</li>
                        </>
                        :
                        <li><Link to="/login" className ="nav-item">Login</Link></li>}

                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Nav
