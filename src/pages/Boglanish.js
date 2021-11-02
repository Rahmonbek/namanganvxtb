import React, { Component } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Footer from "./Footer";
// import Loader from "./Loader";
import NavbarT from "./NavbarT";
import style from '../css/Boglanish.module.css'
import GridLoader from "react-spinners/GridLoader";

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

            <h2
            className={style.sarlavha}
            >
              Bizning Manzilimiz
            </h2>

            <YMaps>
              <div>
                <Map
                  width="100%"
                  height="60vh"
                  defaultState={{ center: [41.000630,71.669404], zoom: 12 }}
                >
                  <Placemark geometry={[41.000630,71.669404]} />
                </Map>
              </div>
            </YMaps>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}
