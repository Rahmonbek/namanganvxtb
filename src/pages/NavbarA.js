import React, { Component } from 'react'
import style from '../css/Navbar.module.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
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
                        <NavLink style={{textDecoration:"none", display:'flex', alignItems: 'center', justifyContent:'center'}} to="/">
                        <img src={logo}/>
                        <p>Namangan viloyat xalq ta'limi boshqarmasi</p>
                        </NavLink>
                    </div>
                    <div className={style.nav}>
                    <ul id="navb">
                    {/* <li onClick={this.closeNav}>
                    <NavLink className={style.lik} to="/">Bosh sahifa</NavLink>
                            </li> */}
                          <li onClick={this.closeNav}>
                                
                                <NavLink className={style.lik} to="/rahbariyat">Rahbariyat</NavLink>
                                </li>
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/yangiliklar/0">Yangiliklar</NavLink>
                            </li> 
                            <li onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/tumanlar">Tumanlar</NavLink>
                            </li>
                            <li onClick={this.closeNav} className="fr">

                            <Dropdown>
  <Dropdown.Toggle className="dropD" variant="light" id="dropdown-basic">
    Hujjatlar
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item>
  <NavLink className={style.lik} to="/talim">Ta'limga oid qonunlar</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/farmon">Prezident farmonlari, farmoyishlari va qarorlari</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/oquvchi">O`quvchilar uchun qonunlar</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/xalq_ta'limi_vazirligi_hay'at_qarorlari">Xalq ta'limi vazirligi Hay'at qarorlari </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/xalq_ta'limi_vazirligi_me'yoriy_hujjatlari">Xalq ta'limi vazirligi me'yoriy hujjatlari </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/o'z_kuchini_yo'qotgan_me'yoriy_huquqiy_hujjatlar">O'z kuchini yo'qotgan me'yoriy-huquqiy hujjatlar</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/me'yoriy_hujjatlar_loyihalari">Me'yoriy hujjatlar loyihalari </NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/ta'limga_oid_normativ-huquqiy_hujjatlar">Ta'limga oid normativ-huquqiy hujjatlar</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/vazirlik_ishtirokidagi_xalqaro_shartnomalar">Vazirlik ishtirokidagi Xalqaro shartnomalar</NavLink>
    </Dropdown.Item>
    <Dropdown.Item>
    <NavLink className={style.lik} to="/davlat_tiliga_oid_normativ-huquqiy_hujjatlar">Davlat tiliga oid normativ-huquqiy hujjatlar</NavLink>
    </Dropdown.Item>

    
   
   
  </Dropdown.Menu>
</Dropdown> 
                              
                                </li>
                               
                          
                                <li onClick={this.closeNav} className="fr">

<Dropdown>
<Dropdown.Toggle className="dropD" variant="light" id="dropdown-basic">
Maktablar
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item>
<NavLink className={style.lik} to="/ishlanma">Dars ishlanmalar</NavLink>
</Dropdown.Item>
<Dropdown.Item>
<NavLink className={style.lik} to="/kutubxona">Elektron kutubxona</NavLink>
</Dropdown.Item>
<Dropdown.Item>
<NavLink className={style.lik} to="/loyihalar">Loyihalar</NavLink>
</Dropdown.Item>
<Dropdown.Item>
<NavLink className={style.lik} to="/maktablar">Xarita</NavLink>
</Dropdown.Item>

</Dropdown.Menu>
</Dropdown> 
  
    </li>
   


                            <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/talim">Ta'limga oid qonunlar</NavLink>
                            </li> <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/farmon">Prezident farmonlari, farmoyishlari va qarorlari</NavLink>
                            </li> <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/oquvchi">O`quvchilar uchun qonunlar</NavLink>
                            </li>
                           <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/xalq_ta'limi_vazirligi_hay'at_qarorlari">Xalq ta'limi vazirligi Hay'at qarorlari </NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/xalq_ta'limi_vazirligi_me'yoriy_hujjatlari">Xalq ta'limi vazirligi me'yoriy hujjatlari </NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/o'z_kuchini_yo'qotgan_me'yoriy_huquqiy_hujjatlar">O'z kuchini yo'qotgan me'yoriy-huquqiy hujjatlar</NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/me'yoriy_hujjatlar_loyihalari">Me'yoriy hujjatlar loyihalari </NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/ta'limga_oid_normativ-huquqiy_hujjatlar">Ta'limga oid normativ-huquqiy hujjatlar</NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/vazirlik_ishtirokidagi_xalqaro_shartnomalar">Vazirlik ishtirokidagi Xalqaro shartnomalar</NavLink></li>
   <li className="grt" onClick={this.closeNav}> <NavLink className={style.lik} to="/davlat_tiliga_oid_normativ-huquqiy_hujjatlar">Davlat tiliga oid normativ-huquqiy hujjatlar</NavLink></li>

                            <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/ishlanma">Dars ishlanmalar</NavLink>
                            </li>
                            <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/kutubxona">Elektron kutubxona</NavLink>
                            </li>
                            <li className="grt" onClick={this.closeNav}>
<NavLink className={style.lik} to="/loyihalar">Loyihalar</NavLink>
                               
                            </li>
                            <li className="grt" onClick={this.closeNav}>
                                <NavLink className={style.lik} to="/maktablar">Xarita</NavLink>
                            </li>
                           

                            <li onClick={this.closeNav}>
                            <NavLink className={style.lik} to="/boglanish">Bog'lanish</NavLink>
                            </li>
                        </ul>
                        </div>
                </div>
            </div>
        )
    }
}
