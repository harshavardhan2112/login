import './App.css';
import profile from "./image/OIP.jpg"
import email from "./image/th.jpg"
import pass from "./image/the.jpg"
function App()
{
    return(
        <div className="main">
            <div className="sub-main">
              <div>
                <div className="imgs">
                  <div className="comntainer-image">
                    <img src={profile} alt="profile" className="profile"></img>

                  </div>
                </div>
                <div>
            <h1>Login page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="UserName" className='name'/>
            </div>
            <div className='second-input'>
              <img src={pass} alt="pass" className="pass"/>
              <input type="text" placeholder="Password" className='name'/>
            </div>
            <div className='login-button'>
            <button>Login</button>
            </div>
            <p className='link'>
              <a href="#">Forget Password ?</a> or <a href="#">Sign Up</a>
            </p>
            </div>
        </div>
        </div>
        </div>
    );
}
export default App;
