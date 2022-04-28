import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Esocial</h3>
                    <span className="loginDesc">connect with friends from all around the world on Esocial</span>
            </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <button className="loginButton">LogIn</button>
                        <button className="loginRegister">Create a new Account</button>

                    </div>
                </div>
            
        </div>
    </div>
  )
}
