import React, { Component } from 'react';
import './Team.css';



class Team extends Component {
    constructor(props){
        super(props);
        this.teamRef = props.teamRef
    }
    render() {
        return(
            <div className="team">
                <img className="logo" alt="logo" src={require("../../../assets/images/medicalblock.png")}/>
                <h1 ref={this.teamRef}>Meet the Team</h1>
                <div className="line-break"></div> 
                    <div className="team-grid">


                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Max Gillespie</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/max.jpeg")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Max is a Junior at Washington University in St. Louis studying Computer Engineering. He has over 
                            4 years of experience working with industrial automation and industrial internet of things technology. 
                            He has had the opportunity to work at several early-stage startups, such as Thankr Corporation and 
                            CorkGuru, as well as larger companies such as Gray Matter Systems and Seegrid Corporation.
                            </p>
                            <p className="bio">
                            Max has a passion for computer security, data management, and scalable data systems, and wants to apply 
                            that passion to the healthcare industry with myEHR to help build a product that transforms the health 
                            record space. 
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Brad Hodkinson</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/brad.jpg")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Brad is a computer science student currently studying at Washington University in St. Louis.
                            He is a Washington native from Snohomish, transferred from Pacific Lutheran University in Tacoma, 
                            Washington after completing a B.A. in Physics. He has a background developing apps and websites, 
                            and is currently working on the development of the website for myEHR. Also is assisting in the 
                            construction of the blockchain network that will facilitate the medical record transfers. He is 
                            a member of the IEEE student chapter, and is on the Cross-Country and Track & Field team. He also 
                            enjoys being in the outdoors and rock climbing. Brad hopes to make an impact transforming the way 
                            medical records are transferred in order to reduce the cases of malpractice and make a new system 
                            that is easy and intuitive to use.
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Louis Smidt</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/louis.jpeg")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Originally from South Africa, Louis is now a Junior studying Electrical & Computer Engineering and
                            Statistics at Rice University in Houston, Texas. His interests primarily lie in deep learning and 
                            data manipulation, and he’s currently working on developing a reliable, scalable, and secure 
                            blockchain network for myEHR. Louis is part of the IEEE Student chapter at Rice, and has held
                            various leadership and technical roles in the Rice Electric Vehicle concept car engineering team 
                            that competes at the annual Shell Eco Marathon competition in Sonoma, California. 
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Julia Smith</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/default.jpg")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Julia is a sophomore at Washington University in St. Louis and is pursuing a bachelor’s degree 
                            in Computer Science, as well as a minor in Environmental Studies. She has worked in medical data 
                            and hospitality, and has also had an internship at KP Pharmaceuticals, a contract medicine and 
                            vaccine manufacturer. Julia’s interests in computer science lie in design and machine learning, 
                            and she is an active member of the Washington University Racing Team, which combines these interests. 
                            In her free time, she enjoys to draw, create video game concepts, code, and work on agricultural 
                            development.
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Beverly Pagone</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/beverly.png")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Beverly has four years’ experience in the role of Information Security Management System Lead for
                            an ISO 27001 certified IS/IT organization. In addition, as an ISTQB certified software tester, 
                            she has participated in enterprise wide software testing efforts. She is currently pursuing her 
                            MBA at Washington University in St. Louis, Olin School of Business. She earned her undergraduate 
                            degree from Indiana University’s Kelley School of Business, with a focus in Operations Management.
                            In 2012 she founded an online e-commerce based business which was the sole distributor of 3D 
                            printed Japanese dress forms in the US market. She aims to strike a balance between cyber security 
                            and data privacy requirements by applying a risk management based process mindset.
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Chris Colon</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/chris.png")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            Chris is a junior at Washington University in St. Louis studying Classics with minors in Data 
                            Science and the Humanities and Business of Social Impact. A transplant from Stamford, Connecticut, 
                            he has a background in both financial research and investments through internships at BCP Securities 
                            and Tudor Investments, as well as in social media and marketing through his work with non-profit 
                            organizations such as the Bartlett Arboretum and Boxgirls International. He currently has professional 
                            interests in leadership development and impact investing, and in his free time enjoys running, hiking, 
                            free-writing, and going to the beach. 
                            </p>
                        </div>

                        <div className="bio-card">
                            <div className="bio-header">
                                <h2 className="name">Vandan Patel</h2>
                                <div className="headshot">
                                    <img src={require("../../../assets/images/headshots/default.jpg")} alt="headshot"/>
                                </div>
                            </div>
                            <p className="bio">
                            
                            </p>
                        </div>





                    </div>
            </div>
        );
    }
}

export default Team;