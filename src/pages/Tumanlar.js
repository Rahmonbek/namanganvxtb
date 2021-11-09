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
import GridLoader from "react-spinners/GridLoader";

export default class Tumanlar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 3000);
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
              <div className={style.head_text}>
                O'zbekiston Respublikasi Namangan viloyati xalq ta'limi
                boshqarmasining tumanlaridagi bo'limlari
              </div>
            </div>
            <div className={style.tumanlar}>
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Chortoq tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Bahodirov Fayzullaxon Abdullayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 94 300 57 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 94 300 57 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Chust tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Karimov Quvonchbek</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 376 76 86">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 376 76 86}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Kosonsoy tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ergashev Soxibjon Ubaydullayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 916 88 55">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 916 88 55}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Davlatobod tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Abduqodirov Isroil Abdupattayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 91 177 00 00">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 91 177 00 00}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Mingbuloq tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Maqsudova Xaqiqat</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 942 05 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 942 05 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Namangan shahri</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Lutfullayev Jahongir </p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 251 50 50">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 251 50 50}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Namangan tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Yuldashev Nodirjon Normatovich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 94 152 55 55">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 94 152 55 55}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Norin tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Normuhammedov Javlon</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 254 87 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 254 87 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>To'raqo'rg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img
                        className={style.Rasm}
                        src="https://as1.ftcdn.net/v2/jpg/02/94/62/14/500_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg"
                      />
                      <br />

                      <div className={style.NameTag}>
                        <p>Bozorov Fayzulla</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 058 03 03">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 058 03 03}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Uchqurg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Zayniyev Boburjon</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 99 398 47 07">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 99 398 47 07}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />

                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Uychi tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Muminov Muzaffar Abdusamatovich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 914 64 00">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 914 64 00}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Yangiqo'rg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Aralov Davron</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 91 114 05 85">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 91 114 05 85}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Pop tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim direktori</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={person} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Xusainov Avazbek</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="ittower01@gmail.com"
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
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
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 231 00 08">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 231 00 08}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
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
                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <p className={style.pp}>
                        Namangan viloyati xalq ta'limi boshqarmasiga virtual
                        sayohat qiling va boshqarma haqida ko'proq ma'lumotga
                        ega bo'ling.
                      </p>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                  </Container>
                </Row>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
