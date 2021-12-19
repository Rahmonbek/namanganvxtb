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
                <Panel header="O‘qituvchilar uchun ilk marta reytingli olimpiada !!!">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={newspictureolimp} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          O‘qituvchilar uchun ilk marta reytingli olimpiada!!!
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-12-18
                        </p>
                        <p>
                          www.khiso.uz saytimizda 19-dekabr soat 14:00 dan 22:00
                          ga qadar quyidagi fanlardan o‘qituvchilar uchun
                          attestatsiyaga tayyorgarlik testlari o‘tkaziladi:
                          Matematika,Fizika,Kimyo,Biologiya,Geografiya,Ona tili
                          va adabiyot,Ingliz tili,Rus tili,Tarix,Boshlang‘ich
                          ta’lim,Huquq,Qoraqalpoq tili,Tasviriy san’at va
                          chizmachilik,Tarbiya,Texnologiya,Informatika Soat
                          22:00 dan keyin barcha ishtirokchilar QR kodli
                          sertifikat yuklab olishadi.
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header="NAMANGANLIK OʻQUVCHI JAHON ChEMPIONATIDA 3 – OʻRINNI QOʻLGA KIRITDI">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={newspicturetakewoondo} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          NAMANGANLIK OʻQUVCHI JAHON ChEMPIONATIDA 3 – OʻRINNI
                          QOʻLGA KIRITDI
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-12-18
                        </p>
                        <p>
                          Belarus respublikasining Minsk shahrida tayekvondo ITF
                          boʻyicha 14-17 yoshlilar hamda faxriylar oʻrtasida
                          Jahon chempionati oʻtkazidi. Oʻzbekiston nomidan 21
                          nafar sportchi ishtirok etgan nufuzli musobaqada
                          Namangan viloyati Yangi Namangan tumanidagi 60 –
                          umumiy oʻrta taʼlim maktabining 10 – sinf oʻquvchisi
                          Ziyoda Abdulhamidova 3 – oʻrinni qoʻlga kiritib,
                          bronza medaliga sazovor boʻldi. Jahon chempionatida
                          muvaffaqiyatli ishtirok etgan Ziyodaning kelgusi
                          ishlarida omad tilaymiz. Namangan viloyat xalq taʼlimi
                          boshqarmasi Axborot xizmati
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header=" KOSONSOYLIK OʻQUVCHILAR KASBLAR YARMARKASIDA QATNASHISHDI">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={newspicturekosonsoy} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          KOSONSOYLIK OʻQUVCHILAR KASBLAR YARMARKASIDA
                          QATNASHISHDI
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-12-18
                        </p>
                        <p>
                          Kosonsoy tumanidagi 58 ta umumtaʼlim maktablarining
                          7-11-sinflarida tahsil olayotgan 700 nafardan ziyod
                          oʻquvchilar “Professional taʼlim muassalarida
                          oʻqitilayotgan kasblar yarmarkasi”da ishtirok etdilar.
                          Tumandagi 1-kasb-hunar maktabida oʻtkazilgan
                          yarmarkada oʻgʻil-qizlar chevarchilik, sartaroshlik,
                          informatsion texnologiyalar, robototexnika,
                          chilangarlik kabi bir qator kasblarning sir-asrorlari
                          bilan yaqindan tanishdilar. Shuningdek, kasb-hunar
                          maktablarining koʻrgazmalari ham ayniqsa, yuqori sinf
                          oʻquvchilari uchun ayni muddao boʻldi. Ular oʻzlari
                          egallamoqchi boʻlgan yoʻnalishlar boʻyicha qoʻshimcha
                          maʼlumotlarga ega boʻldilar. Namangan viloyati xalq
                          taʼlimi boshqarmasi Axborot xizmati
                        </p>
                      </div>
                    </Container>
                  </div>
                </Panel>
                <Panel header="NAMANGANDA “MENING PREZIDENTIM” TANLOVINING VILOYAT BOSQICHI ISHTIROKCHILARI TARIXIY SHAHARLARGA BEPUL SAYOHAT QILADILAR">
                  <div>
                    <Container>
                      <div className={styles.imag}>
                        <img src={newspicturemeningpre} />
                      </div>
                      <div className={styles.yozuv}>
                        <h1>
                          NAMANGANDA “MENING PREZIDENTIM” TANLOVINING VILOYAT
                          BOSQICHI ISHTIROKCHILARI TARIXIY SHAHARLARGA BEPUL
                          SAYOHAT QILADILAR
                        </h1>
                        <p>
                          <i className="fa fa-calendar"></i>2021-12-18
                        </p>
                        <p>
                          Давлатобод туманидаги “Янги зиё” маърифат масканида
                          “Менинг президентим” республика танловининг вилоят
                          босқичи ўтказилди. Кўрик-танлов шартларига кўра эссе,
                          иншо ва тақдимот орқали 5 йил давомида Президентимиз
                          ташаббуси билан амалга оширилган ижтимоий-иқтисодий,
                          маданий ва бунёдкорлик сохаларидаги ишлар, шунингдек,
                          ҳалқаро тузилмалар доирасидаги ҳамда биродар
                          халқларимиз ўртасидаги дўстлик, яхши қўшничилик ва
                          стратегик шериклик муносабатларини очиб бериш кўзда
                          тутилган.
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
