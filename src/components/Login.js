import React,{useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import {UserContext} from '../contexts/userContext';
import {useNavigate} from 'react-router-dom';

const loginStyle={
  transform: 'translate(-50%,-50%)',
  zIndex:1000,
  position:'fixed',
  top:'50%',
  left:'50%',
  backgroundColor:'#fff',
  padding:'50px'
}
const overlayStyle={
  position:'fixed',
  top:'0',
  left:'0',
  right:'0',
  bottom:'0',
  backgroundColor:'rgba(0,0,0,0.7)',
  zIndex:1000
}

const Login = () => {
  let navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
      username: '',
      password: ''
    });
    const profile = useContext(UserContext);
    const onUserNameChange = (event) => {
      setUserInfo({...userInfo, username: event.target.value });
    }
    const onPasswordChange = (event) => {
      setUserInfo({...userInfo,  password: event.target.value });
    }

    const onSubmitHandler=(event)=>{
      event.preventDefault();
      profile.updateLoginStatus({username: userInfo.username});
      setUserInfo({username: '',password:''});
      navigate('/');


    }
  return  ReactDOM.createPortal(
    <div className="portal-overlay" style={overlayStyle}>
      <div className = "login-form" style={loginStyle}>
        <form onSubmit={onSubmitHandler}>
        <div className = "ui equal width form" >
          <div className = "fields" >
                <div className = "field" >
                  <label> Username </label>
                    <input  type = "text" placeholder = "Username" value = {userInfo.username}
                      onChange = {onUserNameChange}/>
                </div>
                <div className = "field" >
                  <label>Password</label>
                  <input type = "password" placeholder="Password" value={userInfo.password} onChange={onPasswordChange}/>
                </div>
        </div >
        <button className="ui submit button blue" type="submit">Login</button>
        </div>
        </form >
      </div>
    </div>, document.getElementById('portal'));

  }
  export default Login;
