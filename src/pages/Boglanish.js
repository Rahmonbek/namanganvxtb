import React, { Component } from "react";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import Footer from "./Footer";
// import Loader from "./Loader";
import NavbarT from "./NavbarT";
import style from '../css/Boglanish.module.css'
import GridLoader from "react-spinners/GridLoader";
import { Row, Col } from 'react-bootstrap'
import axios from "axios";
import { url } from "../host/Host";
import { config } from "@fortawesome/fontawesome-svg-core";
import { message } from "antd";

export default class Boglanish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
      boshqarma:null
    };
  }
  componentDidMount() {
   axios.get(`${url}/boshqarma`).then(res=>{
     this.setState({
boshqarma:res.data[0],
timePassed: true,

    })
   })
  }
  sendMurojat=()=>{
    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var text = document.getElementById('text').value
    var seen=false
    var config={name, phone, text, seen}
    axios.post(`${url}/murojaat/`,config).then(res=>{
        message.success("Xabar yuborildi")
        document.getElementById('name').value=""
 document.getElementById('phone').value=""
document.getElementById('text').value=""
      }).catch(err=>{
        message.error("Xabar jo'natilmadi")
      })
  }
  render() {
    return (
      <div>
        {this.state.timePassed === false ? (
             <div className={style.load}>
             <GridLoader
      color="violet" loading={this.state.loader} size={40} />
             </div>
             
        ) : (
          <div>
            <NavbarT />
            <Row>
<Col lg={6} md={12} sm={12}>
  <h1 className={style.sarlavha}>Bizning manzilimiz</h1>
<br/>

<YMaps>
<div className={style.xarita_item} style={{paddingLeft:'10%',}}>
<Map style={{width:'100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', height:'550px'}} defaultState={{ center: this.state.boshqarma!==null?this.state.boshqarma.params:[41.000630,71.669404], zoom: 12 }} >
<Clusterer
              options={{
                groupByCoordinates: false,
              }}
            >
              <Placemark
                key={-1}
                geometry={ this.state.boshqarma!==null?this.state.boshqarma.params:[41.000630,71.669404]}
                options={{
                  iconLayout: "default#image",
                }}
                properties={{
                  hintContent: `<i><b className="personStyle">Namangan viloyati VXTB</b></i>`,
                }}
                modules={["geoObject.addon.hint"]}
              />
            </Clusterer>
</Map>
</div>
</YMaps>

  </Col>

  <Col lg={6} md={12} sm={12}>
  <h1 className={style.sarlavha}>Biz bilan bo'glaning</h1>


<div className="formFER">
                <div className="container">
                  <div className="brand-logo"></div>
                  <div className="inputs">
                  <form>
                      <label>F.I.O.</label>
                      <input type="text" id="name" placeholder="Ism Familiya Sharifi" />
                      <label>Telefon raqam</label>
                      <input type="text" id="phone" placeholder="+998 99 999 99 99" />
                      <label>Murojaat</label>
                      <textarea id="text" placeholder="Murojaat matni..."></textarea>
                      <button type="button" onClick={this.sendMurojat}>Yuborish</button>
                    </form>
                  </div>
                </div>
              </div>
  </Col>

</Row>


            <Footer />
          </div>
        )}
      </div>
    );
  }
}
