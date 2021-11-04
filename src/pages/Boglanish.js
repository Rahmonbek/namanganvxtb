import React, { Component } from "react";
import { Clusterer, Map, Placemark, YMaps } from "react-yandex-maps";
import Footer from "./Footer";
// import Loader from "./Loader";
import NavbarT from "./NavbarT";
import style from '../css/Boglanish.module.css'
import GridLoader from "react-spinners/GridLoader";
import { Row, Col } from 'react-bootstrap'

export default class Boglanish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 4000);
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
<div className={style.xarita_item}>
<Map style={{width:'100%', height:'550px'}} defaultState={{ center: [41.000630,71.669404], zoom: 12 }} >
<Clusterer
              options={{
                groupByCoordinates: false,
              }}
            >
              <Placemark
                key={-1}
                geometry={[41.000630,71.669404]}
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
