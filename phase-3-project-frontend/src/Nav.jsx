import {Link} from 'react-router-dom'

function Nav (){
    return (
        <ul className='nav'>
            <li><Link to="/"> Market Place</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/manage"> Manage Listings</Link></li>
        </ul>

    )
}
export default Nav
