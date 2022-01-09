import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import NavbarA from "./NavbarA";
import { Collapse } from "antd";
import Footer from "./Footer";

const { Panel } = Collapse;

export default class Yangiliklar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    raqam:"0",
  };

  componentDidMount() {
    this.getNews();
    var link=window.location.href
    
    this.setState({raqam:link.slice(link.lastIndexOf('/')+1, link.length)})

  }
  getNews = () => {
    axios.get(`${url}/boshqarma`).then(res=>{
      this.setState({
        school:res.data[0]
      })
      axios.get(`${url}/news/`).then((res) => {
        this.setState({
          news: res.data.reverse(),
          
        });
        setTimeout(()=>{
          this.setState({loader:false})
        },1000)
      });  
      
    })
   
  };
  render() {
    return (
      <>
        {this.state.loader ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div>
            <NavbarA />
            <div className={style.video}>
              <video loop={true} autoPlay={true} muted={true}>
                <source src={this.state.school!==null?this.state.school.video1:''} type="video/mp4" />
              </video>
            </div>

            <div className={style.binaf}></div>
            <div className={styles.newsY}>
              <Collapse accordion defaultActiveKey={[this.state.raqam]}>
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
