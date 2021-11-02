import { Row } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'
export default class NavbarA extends Component {
 state={
     id:0
 }

 
    Tool =()=>{
 if(this.state.id===0){
    document.querySelector('#navb').style.display="none"

 }
        if(document.querySelector('#navb').style.display==="none"){
        document.querySelector('#navb').style.display="flex"
    }else{
        document.querySelector('#navb').style.display="none"

    }
    this.setState({id:1})
    
   }
   closeNav=()=>{
       if(this.state.id===1){
        document.querySelector('#navb').style.display="none"
   
       }
    }
    render() {

        return (
            <div>
                <div className={style.navbar}>
                  <div className={style.tool} onClick={this.Tool}>
                      <i className="fa fa-bars"></i>
                  </div>
                    <div className={style.brand}>
                        <img src={logo}/>
                    </div>
                    <div className={style.nav}>
                    <ul id="navb">
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/">Bosh sahifa</NavLink>
                            </li>
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/#rahbariyat">Rahbariyat</NavLink>
                            </li>
                         
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/#video">Videolavhalar</NavLink>
                            </li>
                      
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/gallery">Fotolavhalar</NavLink>
                            </li>
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/yangiliklar">Yangiliklar</NavLink>
                            </li>
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/#bog'lanish">Bog'lanish</NavLink>
                            </li>
                        </ul>
                        </div>
                </div>
            </div>
        )
    }
}
