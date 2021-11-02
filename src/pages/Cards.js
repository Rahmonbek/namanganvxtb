import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import school7 from "../images/school7.jpg";
import school8 from "../images/school8.jpg";
import school9 from "../images/school9.jpg";
import school10 from "../images/school10.jpg";
import school11 from "../images/school11.jpg";
import school12 from "../images/school12.jpg";
import styles from '../css/Cards.module.css'
import axios from 'axios';
import { url, user } from '../host/Host';
export default class Cards extends Component {
    state={
        data:null
    }
    getSchool = () => {
        axios.get(`${url}/school-by-admin/${user}`).then((res) => {
          this.setState({
            data: res.data,
           
          })
       }).catch(err=>{console.log(err)})}
    componentDidMount(){
        this.getSchool()
    }
    render() {
        return (
            <div className={styles.cards}>
                 <Row>
     <Col lg={12}>
     <h1 className={styles.sarlavha}>Biz haqimizda</h1>
     <br/>
     <br/>
     </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_oshxona !== null 
                            ? this.state.data.m_h_oshxona
                            : school7
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>Maktab oshxonasi</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_oshxona_t !== null 
                            ? this.state.data.m_h_oshxona_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_sport !== null 
                            ? this.state.data.m_h_sport
                            : school8
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>Sport mashg'ulotlari</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_sport_t !== null 
                            ? this.state.data.m_h_sport_t
                            : `
                            Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_musiqa !== null 
                            ? this.state.data.m_h_musiqa
                            : school9
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>San'at va madaniyat</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_musiqa_t !== null 
                            ? this.state.data.m_h_musiqa_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_axborot !== null 
                            ? this.state.data.m_h_axborot
                            : school10
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>Axborot texnologiyalari</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_axborot_t !== null 
                            ? this.state.data.m_h_axborot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_xavfsizlik !== null 
                            ? this.state.data.m_h_xavfsizlik
                            : school11
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>Xavfsizlik va qo'riqlash</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_xavfsizlik_t !== null 
                            ? this.state.data.m_h_xavfsizlik_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      
                    >
                        <div>
                      <img 
                      alt=" "
                        src={
                          this.state.data !== null&& this.state.data.m_h_tibbiyot !== null 
                            ? this.state.data.m_h_tibbiyot
                            : school12
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#801085",
                          
                          padding: "10%",
                          height: "470px",
                        }}
                      >
                        <h1>Sog'lik va salomatlik</h1>
                        <p>
                          {this.state.data !== null && this.state.data.m_h_tibbiyot_t !== null 
                            ? this.state.data.m_h_tibbiyot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                      
                      </div>
                      </div>
                    </Col>
                  </Row>
            </div>
        )
    }
}
