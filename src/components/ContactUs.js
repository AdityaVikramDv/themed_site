import React,{Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {Link} from 'react-router-dom'

class ContactUs extends Component{
  static contextType = ThemeContext;
  render(){
    let theme = this.context.isDark ? 'inverted':'';
    return (
      <div>
      <h2>Contact Us</h2>
      <button className="ui right floated button"
      onClick={this.context.changeTheme}
      style={{'zIndex':99, 'position':'absolute','right':0, 'top':'148px'}}
      >{this.context.isDark ? "Light Theme" : "Dark Theme" }</button>

      <div className="ui grid five wide column center aligned">
          <div className={`ui attached message ${theme}`}>
              <div className="header">Welcome to our site!</div>
              <p>Fill out the form below to sign-up for a new account</p>
          </div>

        <form className={`ui form attached eight wide column segment ${theme}`}>
            <div className="two fields">
              <div className="field">
              <label>First Name</label>
              <input placeholder="First Name" type="text" />
              </div>
              <div className="field">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text" />
              </div>
            </div>
              <div className="field">
                <label>Username</label>
                <input placeholder="Username" type="text" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" />
              </div>
            <div className="inline field">
              <div className="ui checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
        </div>
            <div className="ui blue submit button">Submit</div>
        </form>
            <div className="ui bottom attached warning message">
              <i className="icon help"></i>
              Already signed up? <Link to="/login">Login here</Link> instead to start Chat.
            </div>
      </div>

      </div>)
  }
}

export default ContactUs;
