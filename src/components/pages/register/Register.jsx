import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Esocial</h3>
                    <span className="loginDesc">connect with friends from all around the world on Esocial</span>
            </div>
                <div className="loginRight">
                    <div className="loginBox">
                       <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />

                        <button className="loginButton">SignUp</button>
                        <button className="loginRegister">Login to Account</button>

                    </div>
                </div>
            
        </div>
    </div>
  )
}
