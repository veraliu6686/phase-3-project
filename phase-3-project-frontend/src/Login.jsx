import {useState} from "react"
import {useNavigate} from 'react-router-dom'

function Login ({setUser, setLogin}) {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const [incorrect, setIncorrect] = useState(false)

    let navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();

        fetch(`http://localhost:9292/users/${username.toLowerCase()}`)
        .then(r=>r.json())
        .then(profile => {
            if (profile) {
                if (profile.password === password) {
                    setUser(profile)
                    setLogin(true)
                    navigate(`/`)
                }
                else {
                    setIncorrect(true);
                    setTimeout(()=>setIncorrect(false),3000)
                }
            }
            else {
                setIncorrect(true);
                setTimeout(()=>setIncorrect(false),3000)
            }
        })
    }

    return (
        <form id = "login-box" onSubmit={handleSubmit}>
            <h1>LOG IN</h1>
                <h3>TO DIG YOUR TREASURES💰</h3>
                <p style={incorrect?{color: "red", display: "block"}:{color: "red", display: "none"}}>*Incorrect username or password*</p>
            <div className="input-box">
                <i className="fa-solid fa-user fa-lg"></i>
                <input type = "text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="input-box">
                <i className="fa-solid fa-lock fa-lg"></i>
                <input type = "password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )

}

export default Login
