import React from 'react';
import './ReviewHouse.css';
import { BsFillHouseFill } from "react-icons/bs";
import { MdSmokingRooms } from "react-icons/md";
import { MdDoNotDisturb } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { BsChevronCompactDown } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import cardImg from '../../Images/cardImg.jpg'
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function ReviewHouse() {
    return (
        <div className="container pt-2">
            <div className="d-flex">
                <p className="fontSize1">1. Reviews house rules <span className="fontSize"> <IoIosArrowForward /> </span></p>
                <p className="textColor">2. Who's coming? <span><IoIosArrowForward /> </span></p>
                <p className="textColor">3. Confirm and pay </p>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>Review house rules</h3>
                    <h5 className="pt-2">3 nights in Dhaka</h5>
                    <div className="d-flex justify-content-between pt-2">
                        <div className="d-flex">
                            <div className="mr-2">
                                <p className="bgColor">APR <br/> 13</p> 
                            </div>
                            <div>
                                <p>Monday check-in <br/> After 12:00 PM</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                                <p className="bgColor">APR <br/> 17</p> 
                            </div>
                            <div>
                                <p>Thursday checkout <br/> 11:00 AM</p>
                            </div>
                        </div>
                    </div>
                    <p>Self check-in with building staff</p>
                    <div className="borderBottom"></div>
                    <div className="pt-2">
                        <h5>Things to keep in mind</h5>
                        <div className="pt-2">
                            <div className="d-flex">
                                <p className="mr-3 border p-2"><BsFillHouseFill /> </p>
                                <p className="pt-2">Sultable for children and infants</p>
                            </div>
                            <div className="d-flex">
                                <p className="mr-3 border p-2"><MdPets /> </p>
                                <p className="pt-2">Pets allowed</p>
                            </div>
                            <div className="d-flex">
                                <p className="mr-3 border p-2"><MdDoNotDisturb /> </p>
                                <p className="pt-2">No parties or events</p>
                            </div>
                            <div className="d-flex">
                                <p className="mr-3 border p-2"><MdSmokingRooms /> </p>
                                <p className="pt-2">Smoking allowed</p>
                            </div>
                            <p className="text-primary">Read more <span className="ml-2"><BsChevronCompactDown /></span> </p>
                        </div>
                        <button className="btn1"> <a style={{textDecoration: 'none', color: '#fff'}} href="/coming">Agree and continue</a> </button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
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

export default ReviewHouse
