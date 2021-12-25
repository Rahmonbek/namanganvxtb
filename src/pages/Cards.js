import React, { Component } from "react";
import { Card } from "react-bootstrap";

import style from "../css/Cards.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pic13 from "../images/ac2ba8c2-8cea-312b-591a-b5e87feba57b.jpg";
import drasm1 from "../images/drasm1.jpeg";
import drasm3 from "../images/drasm3.jpeg";
import drasm2 from "../images/drasm2.png";
import drasm8 from "../images/drasm8.png";
import drasm5 from "../images/drasm5.png";
import drasm6 from "../images/drasm6.jpg";
import drasm7 from "../images/drasm7.jpg";
import drasm9 from "../images/drasm9.jpg";
import drasm10 from "../images/drasm10.jpg";
import chortoqrah from "../images/Chortoq tumanirah.jpg";
import chustrah from "../images/chustrah.jpg";
import mingbuloqrah from "../images/Mingbuloq tumanirah.jpg";
import namangantumrah from "../images/Namangan tumanirah.jpg";
import norinrah from "../images/Norin tumanirah.jpg";
import poprah from "../images/pop tumanirah.jpg";
import namanganshrah from "../images/namangan shaxarrah.jpg";
import toraqqorgonrah from "../images/Toraqorgon tumanirah.jpg";
import uchqorgonrah from "../images/Uchqorgon tumanirah.jpg";
import axios from 'axios'
import {url} from '../host/Host'
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
export default class Cards extends Component {
 state={
   tumanlar:null
 }
 componentDidMount(){
   axios.get(`${url}/regions/`).then(res=>{
     this.setState({tumanlar:res.data})
   })
 }
  _onEnd(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const responsive3 = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div className={style.tumanlar}>
        <h1 className={style.sarlavha}>Tuman bo'limlari</h1>

        <br />
       {this.state.tumanlar!==null? <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive3}
        >
{this.state.tumanlar.map(item=>{
  return(<div className={style.news_item}>
    <Card
      className={style.news_itemcard1}
      style={{
        border: "1px solid lightgrey",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <Card.Img
        className={style.news_itemcard2}
        variant="top"
        src={item.image}
      />
      <Card.Body>
        <Card.Text className={style.ptr}>
          {item.name} xalq ta'limi boshqarmasi
        </Card.Text>
        <a className={style.hov_btn} href={item.domain}>
          Bo'lim veb saytini ko'rish
        </a>
      </Card.Body>
    </Card>
    <div className={style.hov}>
      <div className={style.hov_item}>
        <div>
          <Tooltip placement="right" title={item.email}>
            {" "}
            <a
              target="_blank"
              href={`mailto: ${item.email}
          `}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </Tooltip>
        </div>
        <div>
          <a target="_blank" href={item.telegram}>
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={item.instagram}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={item.facebook}
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href={item.youtube}
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className={style.tel}>
        <Tooltip placement="top" title={item.phone}>
          {" "}
          <a target="_blank" href={`tel: ${item.phone}`}>
            <i class="fas fa-phone-alt"></i>
          </a>{" "}
        </Tooltip>
      </div>
    </div>
  </div>)
})}
          
        </Carousel>
       :''}
        <br />
        <Link to="/tumanlar" className={style.bar} id="btr">
          Barcha tuman bo'limlarini ko'rish{" "}
          <i className="fas fa-arrow-right"></i>
        </Link>
        <br />
      </div>
    );
  }
}
