import React from 'react';
import './Coming.css';
import { BsChevronCompactDown } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import cardImg from '../../Images/cardImg.jpg'
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import profile from '../../Images/profile.jpg'

function Coming() {
    return (
        <div className="container pt-2">
            <div className="d-flex">
                <p className="fontSize1">1. Reviews house rules <span className="fontSize"> <IoIosArrowForward /> </span></p>
                <p className="fontSize1">2. Who's coming? <span><IoIosArrowForward /> </span></p>
                <p className="textColor">3. Confirm and pay </p>
            </div>
            <div className="row pt-3">
                <div className="col-md-6 col-sm-12 pt-5">
                    <h3>Travelling for work?</h3>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="pt-2">3 nights in Dhaka</p>
                            <p>Let Rowdra a little about yourself and why you're coming.</p>
                        </div>
                        <div>
                            <img className="imgCircle" src={profile} alt="profile"/>
                            <p className="text-center">Rowdra</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn1"> <a style={{textDecoration: 'none', color: '#fff'}} href="/confirm">Continue</a> </button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="pt-2"></div>
                    <div className="card boxShadow">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6>Light bright airy stylish apt & safre peaceful stay</h6>
                                    <p><span className="bgCo"> <AiFillStar /></span> 4.9 (20 reviews)</p>
                                </div>
                                <div>
                                    <img id="imgMegerment" className="img-fluid" src={cardImg} alt="cardImg"/>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p>Dates</p>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>4/13/2020</div>
                                            <div><BsArrowRightShort /></div>
                                            <div>17/13/2020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p>Guests</p>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                3 Guests
                                            </div>
                                            <div><BsChevronCompactDown /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="d-flex justify-content-between border-bottom">
                                    <p>$34*4 nights</p>
                                    <p>$136</p>
                                </div>
                                <div className="d-flex justify-content-between border-bottom">
                                    <p>Cleaning fee</p>
                                    <p>$10</p>
                                </div>
                                <div className="d-flex justify-content-between border-bottom">
                                    <p>Service fee</p>
                                    <p>$21</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="textDark">Total</p>
                                    <p className="textDark">$167</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coming
