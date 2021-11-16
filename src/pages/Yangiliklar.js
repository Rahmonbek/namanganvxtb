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
import { idMaktab, url, user } from "../host/Host";
import NavbarA from "./NavbarA";
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
  getNews = () => {
    getNews()
      .then((res) => {
        this.setState({
          news: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${user}`).then((res) => {
      this.setState({
        school: res.data,
      });
      axios.get(`${url}/region/${res.data.region}/`).then((res1) => {
        this.setState({ region: res1.data });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 3000);
      });
    });
  };

  componentDidMount() {
    this.getSchool();
    this.getNews();
  }
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
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <div className={style.binaf}>
              {/* <h1>
                {" "}
                O'zbekiston Respublikasi Namangan viloyati xalq ta'limi
                boshqarmasining yangiliklari
              </h1> */}
            </div>
            <div className={styles.newsY}>
              <Collapse accordion defaultActiveKey={["0"]}>
                <Panel header="Muallimning maoshini 1000 dollarga yetkazmaguncha to‘xtamayman">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={new7} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          Muallimning maoshini 1000 dollarga yetkazmaguncha
                          to‘xtamayman
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-10-28
                        </p>
                        <p>
                          O‘zbekistonda ta'lim bo‘yicha milliy dastur qabul
                          qilinadi. Bu haqda Shavkat Mirziyoyev Farg‘onada
                          saylovchilar bilan uchrashuvida aytib o‘tdi. “Agar
                          meni saylasangiz, va'da berib aytaman, ta'lim bo‘yicha
                          alohida milliy dastur qabul qilamiz. Boshqa ilojimiz
                          yo‘q. Chunki ta'lim biz uchun nihoyatda muhim.
                          Prezidentlikka kirishgan paytim mendan maktabning
                          10-11 sinflarini tiklab berishni so‘rashdi. Amalga
                          oshirdik. Ustozning nufuzini oshirish uchun hali
                          qiladigan ishlarimiz juda ko‘p. Hammangiz bilasiz,
                          yoshligimizda o‘qituvchi ko‘chadan o‘tsa, biz 5 metr
                          chetroqqa o‘tib salom berardik. Men muallimning
                          maoshini 1 ming dollarga yetkazmaguncha to‘xtamayman.
                          Afsuski, so‘nggi paytlarda yoshlarning “tarbiyachisi”
                          qo‘llaridagi telefon bo‘lib qoldi. Bu ham zamona zayli
                          albatta, lekin yoshlarimiz tarbiyasi meni jiddiy
                          o‘ylantiradi”, – deya Shavkat Mirziyoyevning
                          so‘zlaridan iqtibos keltirmoqda Kun.uz muxbiri.
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel
                  header="Viloyat xalq ta'limi boshqarmasida tanqidiy-tahliliy
                        yig'ilish bo'lib o'tdi"
                >
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={new1} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          Viloyat xalq ta'limi boshqarmasida tanqidiy-tahliliy
                          yig'ilish bo'lib o'tdi
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-10-27
                        </p>
                        <p>
                          Viloyat xalq taʼlimi boshqarmasida oʻquvchilar bilan
                          bogʻliq yoʻl transport xodisalari, umumiy oʻrta taʼlim
                          muassasalarida koronovirus infeksiyasi tarqalishini
                          oldini olish borasida koʻrilayotgan chora-tadbirlar
                          hamda maktablarda epidemiologik havfsizlik talablariga
                          qatʼiy rioya qilish, Davlatobod tumani xalq taʼlimi
                          boʻlimi va taʼlim muassasalarida taʼlim jarayonini
                          tashkil etilishi, oʻquvchilar oʻrtasida
                          jinoyatchilikni oldini olish borasida amalga
                          oshirilayotgan tadbirlar samaradorligini oʻrganish
                          yakuni masalalarida muhokama yigʻilishi boʻlib oʻtdi.
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header="Ziyo maskani kutubxonachilari mamlakat miqyosidagi tanlovda e'tirof etildi">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={new8} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          Ziyo maskani kutubxonachilari mamlakat miqyosidagi
                          tanlovda e'tirof etildi
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-10-27
                        </p>
                        <p>
                          Xalq taʼlimi vazirligi va Respublika Bolalar
                          kutubxonasi tomonidan “Kun kitobxoni”, “Yilning eng
                          yaxshi maktab kutubxonachisi”, “Uslubchi-sohada
                          yoʻlboshchi” kabi kitobxonlik koʻrik-tanlovlari
                          oʻtkazildi. Har bir hududdan faol va tashabbuskor
                          kitobxon nomzodlar oʻz bilim va salohiyatlarini
                          namoyish etdilar. Yakuniy natijalarga koʻra Chortoq
                          tumanidagi 42-sonli umum taʼlim maktabining
                          kutubxonachisi Madinaxon Dadamirzayeva “Yilning eng
                          yaxshi kutubxonachisi” yoʻnalishi boʻyicha 3- oʻrinni
                          egallagan boʻlsa, viloyati bolalar kutubxonasi
                          uslubchisi Azimjon Tursunov “Uslubchi - sohada
                          yoʻlboshchi” yoʻnalishi boʻyicha faxrli 2-oʻrinni
                          qoʻlga kiritdi
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header="Viloyat xalq ta'limi boshqarmasi boshlig'i Kasaba uyushmalari kuniga 1 yil esdalik nishoni bilan taqdirlandi">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={new2} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          Viloyat xalq ta'limi boshqarmasi boshlig'i "Kasaba
                          uyushmalari kuniga 1 yil" esdalik nishoni bilan
                          taqdirlandi
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-10-27
                        </p>
                        <p>
                          Viloyat kasaba uyushmasi binosida “Kasaba uyushmalari
                          kuniga 1 yil” esdalik nishonlarini topshirish hamda
                          kasaba uyushmalari Federatsiyasi mukofoti Laureati,
                          “Eng yaxshi sektor rahbari”, “Eng yaxshi mahalla
                          raisi”, ”Kasaba uyushmalari Federatsiyasi laureati”
                          sovrindorlarini taqdirlash marosimi boʻlib oʻtdi.
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header="KHISO olimpiada maktabidan yangi olimpiada!">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={new9} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>KHISO olimpiada maktabidan yangi olimpiada!</h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-10-27
                        </p>
                        <p>
                          Hayotda muvaffaqiyat uchun doimo olgʻa intilish muhim
                          hisoblanadi. Bu yoʻlda sizga IQ test, tanqidiy
                          fikrlash, matematika, rus tili va ingliz tili boʻyicha
                          koʻnikmalar kerak boʻladi.
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
              </Collapse>
            </div>
            <Footer />
          </div>
        )}
      </>
    );
  }
}
