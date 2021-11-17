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

import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
export default class Cards extends Component {
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
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive3}
        >
          <div className={style.news_item}>
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
                src={pic13}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Chortoq tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="chortoq_txtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: chortoq_txtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/1020634188706212/?ref=share"
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
                <Tooltip placement="top" title="(94)300-57-77">
                  {" "}
                  <a target="_blank" href={`tel: (94)300-57-77}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm1}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Chust tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="chusttxtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: chusttxtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/chustxtb/?multi_permalinks=670397927279829"
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
                <Tooltip placement="top" title="(97)376-76-86">
                  {" "}
                  <a target="_blank" href={`tel: (97)376-76-86}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm3}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Kosonsoy tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="kosonsoy-xtb@inbox.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: kosonsoy-xtb@inbox.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/profile.php?id=100068972252751"
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
                <Tooltip placement="top" title="(93)916-88-55">
                  {" "}
                  <a target="_blank" href={`tel: (93)916-88-55}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm2}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Mingbuloq tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="mingbuloqxtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: mingbuloqxtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://facebook.com/groups/1549796655354486/"
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
                <Tooltip placement="top" title="(93)942-05-77">
                  {" "}
                  <a target="_blank" href={`tel: (93)942-05-77}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm5}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Namangan shahri xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="namangan_shxtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: namangan_shxtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/namanganshxtb/"
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
                <Tooltip placement="top" title="(97)251-50-50">
                  {" "}
                  <a target="_blank" href={`tel: (97)251-50-50}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm8}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Namangan tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="bottom" title="namangan_txtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: namangan_txtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/1240427446468350/?ref=share"
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
                <Tooltip placement="bottom" title="(94)152-55-55">
                  {" "}
                  <a target="_blank" href={`tel: (94)152-55-55}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm6}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Norin tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="NorinTXTB@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: NorinTXTB@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                  <a target="_blank" href="https://www.facebook.com/Norinxtb">
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
                <Tooltip placement="top" title="(97)254-87-77">
                  {" "}
                  <a target="_blank" href={`tel: (97)254-87-77}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm7}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Pop tuman xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="Pop _TXTB@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: Pop _TXTB@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/PopTXTB/posts/434742101646016"
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
                <Tooltip placement="top" title="(93)231-00-08">
                  {" "}
                  <a target="_blank" href={`tel: (93)231-00-08}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm9}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  To'raqo'rg'on tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="turakurgan_txtb@uzedu.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: turakurgan_txtb@uzedu.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/376064277043880/permalink/606130964037209/"
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
                <Tooltip placement="top" title="(93)058-03-03">
                  {" "}
                  <a target="_blank" href={`tel: (93)058-03-03}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm10}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Uchqo'rg'on tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="bottom" title="uchkurgon_txtb@xtv.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: uchkurgon_txtb@xtv.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/profile.php?id=100072324061993"
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
                <Tooltip placement="bottom" title="(99)398-47-07">
                  {" "}
                  <a target="_blank" href={`tel: (99)398-47-07}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm7}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Uychi tuman xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="Uychitxtb@xtb.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: Uychitxtb@xtb.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/uychixtb/?ref=share"
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
                <Tooltip placement="top" title="(93)914-64-00">
                  {" "}
                  <a target="_blank" href={`tel: (93)914-64-00}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>

          <div className={style.news_item}>
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
                src={drasm9}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Yangiqo'rg'on tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="Yangiqurgon_txtb@exat.uz">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: Yangiqurgon_txtb@exat.uz
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/1645400222322751/?ref=share"
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
                <Tooltip placement="top" title="(91)114-05-85">
                  {" "}
                  <a target="_blank" href={`tel: (91)114-05-85}`}>
                    <i class="fas fa-phone-alt"></i>
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
          </div>
          <div className={style.news_item}>
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
                src={drasm9}
              />
              <Card.Body>
                <Card.Text style={{ fontSize: "16px" }} className={style.ptr}>
                  Davlatobod tumani xaql ta'limi boshqarmasi
                </Card.Text>
                <a className={style.hov_btn} href="#">
                  Bo'lim veb saytini ko'rish
                </a>
              </Card.Body>
            </Card>
            <div className={style.hov}>
              <div className={style.hov_item}>
                <div>
                  <Tooltip placement="right" title="">
                    {" "}
                    <a
                      target="_blank"
                      href={`mailto: 
                  }`}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </Tooltip>
                </div>
                <div>
                  <a target="_blank" href="https://t.me/samarqand_33_maktab">
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
                    href="https://www.facebook.com/groups/222091629666161/?ref=share_group_link"
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
                <Tooltip placement="top" title="(90)330-31-00">
                  {" "}
                  <a target="_blank" href={`tel: (90)330-31-00}`}>
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
    );
  }
}
