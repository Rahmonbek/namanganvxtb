import React, { Component } from 'react'
import { Card,} from 'react-bootstrap'

import style from '../css/Cards.module.css'
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

import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
export default class Cards extends Component {
  
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
            <Carousel
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              responsive={responsive3}
            >
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={pic13} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Bog'ot tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm1} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Gurlan tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm3} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                        Xonqa tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm2} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                     Shovot tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm5} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                     Urganch shahri xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm8} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                     Urganch tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="bottom" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="bottom" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card  className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm6} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Xazorasp tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm7} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Xiva tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm9}  />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Xonqa tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="right" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className={style.tel}>
                    <Tooltip placement="top" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>
                      </a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className={style.news_item}>
                <Card className={style.news_itemcard1} style={{ border: "1px solid lightgrey", boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                  <Card.Img className={style.news_itemcard2}  variant="top" src={drasm10} />
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: "16px" }}
                      className={style.ptr}
                    >
                      Yangiariq tumani xaql ta'limi boshqarmasi
                    </Card.Text>
                    <a className={style.hov_btn} href="#">
                      Bo'lim veb saytini ko'rish
                    </a>
                  </Card.Body>
                </Card>
                <div className={style.hov}>
                  <div className={style.hov_item}>
                    <div>
                      <Tooltip placement="bottom" title="ittower01@gmail.com">
                        {" "}
                        <a
                          target="_blank"
                          href={`mailto: ittower01@gmail.com
                  }`}
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </Tooltip>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/samarqand_33_maktab"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/33_maktab_official/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                  <div className={style.tel}>
                    <Tooltip placement="bottom" title="(8362)31-52-967">
                      {" "}
                      <a target="_blank" href={`tel: (8362)31-52-967}`}>
                      <i class="fas fa-phone-alt"></i>

</a>{" "}
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Carousel>
            <br />
            <Link to="/tumanlar" className={style.bar} id="btr">
              Barcha tuman bo'limlarini ko'rish{" "}
              <i className="fas fa-arrow-right"></i>
            </Link>
            <br />
          </div>

        )
    }
}
