import React,{Component} from 'react';
import Elyse from '../images/elyse.png';
import Matthew from '../images/matthew.png';
import Molly from '../images/molly.png';
import {Link} from 'react-router-dom';

import {ThemeContext} from '../contexts/ThemeContext';

class About extends Component{
  static contextType = ThemeContext;
  render(){
    let theme = this.context.isDark ? 'black':'white';
    return (
    <div style={{backgroundColor: theme}}>
    <h2 className=""> About </h2>
    <button className="ui right floated button" onClick={this.context.changeTheme}>
    {this.context.isDark ? "Light Theme" : "Dark Theme" }
    </button>
      <div className="">
        <div className="ui link cards">
          <div className="black card">
          <div className="image">
            <img src={Matthew} alt="Matthew"/>
          </div>
          <div className="content">
            <div className="header center aligned">Matt Giampietro</div>
            <div className="center aligned meta">
              <Link to="/contactus/matt">Founder</Link>
            </div>
            <div className="description">
              Matthew is an interior designer living in New York. Founder of the design firm.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 1989
            </span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={ Molly } alt="MOlly"/>
          </div>
          <div className="content">
            <div className="header">Molly</div>
            <div className="meta">
              <span className="date">Designer</span>
            </div>
            <div className="description">
              Molly is a personal assistant living in Paris.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 2011
            </span>
            <span>
              <i className="user icon"></i>
              35 Friends
            </span>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={Elyse} alt="Elyse"/>
          </div>
          <div className="content">
            <div className="header">Elyse</div>
            <div className="meta">
              <Link to="/contactus/elyse">Coworker</Link>
            </div>
            <div className="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 2014
            </span>
            <span>
              <i className="user icon"></i>
              151 Friends
            </span>
          </div>
        </div>
        </div>


      </div>
    </div>)
  }
}

export default About;
