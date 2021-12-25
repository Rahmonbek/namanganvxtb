import React, { Component } from "react";
import Footer from "./Footer";
import NavbarT from "./NavbarT";
import style from "../css/Tumanlar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
// import Loader from "./Loader";
import sanakulov from "../images/sanakulov.jpg";
import sharahmetov from "../images/sharahmetov.jpg";
import djulibekov from "../images/djulibekov.jpg";
import tuman1 from "../images/tuman1.jpg";
import tuman2 from "../images/tuman2.jpg";
import tuman3 from "../images/tuman3.jpg";
import tuman4 from "../images/tuman4.jpg";
import person from "../images/person.jpg";
import chortoqrah from "../images/Chortoq tumanirah.jpg";
import chustrah from "../images/chustrah.jpg";
import mingbuloqrah from "../images/Mingbuloq tumanirah.jpg";
import namangantumrah from "../images/Namangan tumanirah.jpg";
import norinrah from "../images/Norin tumanirah.jpg";
import poprah from "../images/pop tumanirah.jpg";
import namanganshrah from "../images/namangan shaxarrah.jpg";
import toraqqorgonrah from "../images/Toraqorgon tumanirah.jpg";
import uchqorgonrah from "../images/Uchqorgon tumanirah.jpg";
import uychirah from "../images/Uychi tumanirah.jpg";
import yangiqorgonrah from "../images/Yangiqorgonrah.jpg";
import davlatobodrah from "../images/Davlatobod tumanirah.jpg";
import kosonsoyrah from "../images/Kosonsoy tumanirah.jpg";
import chortoq from "../images/Chortoq tumani.jpg";
import chust from "../images/Chust tumani.jpg";
import davlatobod from "../images/Davlatobod tumani.jpg";
import kosonsoy from "../images/Kosonsoy tumani.jpg";
import mingbuloq from "../images/Mingbuloq tumani.jpg";
import namangansh from "../images/Namangan shaxar muduri.jpg";
import namangant from "../images/Namangan tumani muduri.jpg";
import norin from "../images/Norin tumani.jpg";
import pop from "../images/Pop tumani muduri.jpg";
import toraqorgon from "../images/To'raqo'rg'on tumani.jpg";
import uchqorgon from "../images/Uchqorgon tumani muduri.jpg";
import uychi from "../images/UYchi tumani.jpg";
import yanginamangan from "../images/Yangi Namangan tumani.jpg";
import yangiqorgon from "../images/Yangiqorgon tumani.jpg";
import GridLoader from "react-spinners/GridLoader";
import Rasm from "../images/dxorazm0.jpg";
import axios from "axios";
import { url } from "../host/Host";
export default class Tumanlar extends Component {
  state={
    tumanlar:null,
    timePassed:false
  }
  componentDidMount(){
    axios.get(`${url}/regions/`).then(res=>{
      this.setState({tumanlar:res.data, timePassed:true})
    })
  }
  render() {
    return (
      <div>
        {this.state.timePassed == false ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div>
            <NavbarT />
            <div className={style.head}>
              
            </div>
            <div className={style.tumanlar}>
              {this.state.tumanlar!==null?this.state.tumanlar.map(item=>{
                return(<div className={style.tumanlar_item}>
                  <h1 className={style.sarlavha}>{item.name}</h1>
  
                  <Row>
                    <Container className={style.container}>
                      <Col className={style.Col1} lg={6} md={6} sm={12}>
                        <h4>Bo'lim mudiri</h4>
                        <div className={style.chiziq}></div>
                        <br />
                        <img className={style.Rasm} src={item.image_region} />
                        <br />
  
                        <div className={style.NameTag}>
                          <p>{item.full_name}</p>
                          <p>Bo'limning ijtimoiy sahifalari:</p>
                        </div>
                        <div className={style.iconsHead}>
                          <div id={style.mediaa11}>
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={item.telegram}
                            >
                              <i className="fab fa-telegram"></i>
                            </a>
                          </div>
                          <div>
                            <Tooltip
                              placement="bottom"
                              title={item.email}
                            >
                              {" "}
                              <a
                                target="_blank"
                                className={style.ahref}
                                href={`mailto: ${item.email}`}
                              >
                                <i className="fas fa-envelope"></i>
                              </a>
                            </Tooltip>
                          </div>
                          <div>
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={item.instagram}
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                          <div id={style.mediaa11}>
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={item.facebook}
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                          </div>
                          <div>
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={item.youtube}
                            >
                              <i className="fab fa-youtube"></i>
                            </a>
                          </div>
                          <div>
                            <Tooltip placement="bottom" title={item.phone}>
                              {" "}
                              <a
                                target="_blank"
                                className={style.ahref}
                                href={`tel: ${item.phone}`}
                              >
                                <i className="fas fa-phone"></i>
                              </a>{" "}
                            </Tooltip>
                          </div>
                        </div>
                        <a href={item.domain} className={style.but} target="_blank">
                          Bo'limning veb saytiga o'tish
                        </a>
                      </Col>
                      <Col
                        className={style.Col1}
                        lg={6}
                        md={6}
                        sm={12}
                        style={{ position: "relative" }}
                      >
                        <h4>Bo'lim haqida</h4>
                        <div className={style.chiziq}></div>
                        <br />
                        <div className={style.NameTag}>
                          <p>Bo'lim videosi</p>
                        </div>
  
                        <YouTube
                          videoId={item.video.slice(item.video.lastIndexOf('/'), item.video.length)}
                          opts={{
                            playerVars: {
                              // https://developers.google.com/youtube/player_parameters
                              autoplay: 0,
                            },
                          }}
                          className={style.video}
                        />
                        <div className={style.NameTag}>
                          <p
                            style={{
                              paddingTop: "15px",
                              borderTop: "3px solid rgb(111, 3, 90)",
                            }}
                          >
                            Bo'lim rasmi
                          </p>
                        </div>
                        <div className={style.Yimage}>
                          <img src={item.image} style={{ width: "100%", height:'250px' }} />
                        </div>
                      </Col>
                    </Container>
                  </Row>
                  <br />
                </div>
               
                )
              }):''}
                
                
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
