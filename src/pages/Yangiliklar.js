import video2 from "../videos/bosh3.mp4";
import React, { Component } from "react";
import NavbarT from "./NavbarT";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import NavbarA from "./NavbarA";
import newspictureolimp from "../images/Newspictureolimp.jpg";
import newspicturekosonsoy from "../images/Newspicturekosonsoy.jpg";
import newspicturetakewoondo from "../images/NewspictureTakewoondo.jpg";
import newspicturemeningpre from "../images/Newspicturemeningpre.jpg";
import new7 from "../images/new7.jpeg";
import new1 from "../images/new1.jpg";
import new8 from "../images/new8.jpg";
import new2 from "../images/new2.jpg";
import new9 from "../images/new9.jpg";
import { Collapse } from "antd";
import { getNews } from "../host/Config";
import Footer from "./Footer";

const { Panel } = Collapse;

export default class Yangiliklar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
  };

  componentDidMount() {
    this.getNews();
  }
  getNews = () => {
    axios.get(`${url}/news/`).then((res) => {
      this.setState({
        news: res.data,
        loading: false,
      });
    });
  };
  render() {
    return (
      <>
        {this.state.timePassed == false ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div>
            <NavbarA />
            <div className={style.video}>
              <video loop={true} autoPlay={true} muted={true}>
                <source src={video2} type="video/mp4" />
              </video>
            </div>

            <div className={style.binaf}></div>
            <div className={styles.newsY}>
              <Collapse accordion defaultActiveKey={["0"]}>
                {this.state.news !== null
                  ? this.state.news.map((item) => {
                      return (
                        <Panel header={item.name}>
                          <div>
                            <Container>
                              <div className={styles.imag}>
                                <img src={item.image} />
                              </div>
                              <div className={styles.yozuv}>
                                <h1>{item.name}</h1>
                                <p>
                                  <i className="fa fa-calendar"></i>
                                  {item.date_added}
                                </p>
                                <p>{item.description}</p>
                              </div>
                            </Container>
                          </div>
                        </Panel>
                      );
                    })
                  : ""}
              </Collapse>
            </div>
            <Footer />
          </div>
        )}
      </>
    );
  }
}
