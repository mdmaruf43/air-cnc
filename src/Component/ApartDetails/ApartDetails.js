import React from 'react';
import './ApartDetails.scss';
import image1 from '../../Images/photo-1560347876-aeef00ee58a1.jpeg';
import image2 from '../../Images/photo-1522708323590-d24dbb6b0267.jpeg';
import self from '../../Images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import { AiFillHome, AiFillCheckSquare, AiOutlineUser, AiTwotoneStar, AiOutlineArrowRight } from 'react-icons/ai';
import { GiVacuumCleaner } from 'react-icons/gi';


const ApartDetails = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 topImage">
                    <img src={image1} alt="" />
                </div>
                <div className="col-md-6 topImage">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center align-items-center apartment">
                        <div>
                            <h1>Light bright airy stylis apt safe peaceful stay</h1>
                            <h6>Dhaka, Bangladesh</h6>
                            <h6>4 guests 2 bedrooms 2 beds 2 baths</h6>
                        </div>
                        <div className="selftImage">
                            <img src={self} alt="" />
                            <h6>Rowdra</h6>
                        </div>
                    </div>
                    <div className="Home-condition">
                        <div>
                            <h5><AiFillHome /> Entire home</h5>
                            <h6>You'll have the condominium to yourself</h6>
                        </div>
                        <div>
                            <h5><AiFillCheckSquare /> Self check-in</h5>
                            <h6>You can check in with the doorman</h6>
                        </div>
                        <div>
                            <h5><GiVacuumCleaner /> Sparkling clean</h5>
                            <h6>10 recent guests said this place was sparkling clean.</h6>
                        </div>
                        <div>
                            <h5><AiOutlineUser /> Rowdra is a Superhost</h5>
                            <h6>Superhosts are experienced, highly rated hosts who are commited to providing great stays for guests.</h6>
                        </div>
                    </div>
                    <div className="Home-condition">
                        <div>
                            <h6>
                                It's newly constructed 7 stroried building maintaining building code by a locally famous architect, Enough lights and natural air are playing here. The place (apartment) is calm and noise free. You'll love my place for its lovely and bright looks comfortable stay.
                                Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm. It's newly constructed 7 storied building maintaining building code by a locally famous architect. Enought lights and natural air are playing here. The place (apartment) is calm and noise free.
                                You'll love my place for it's lovely and bright looks comfortable stay.
                            </h6>
                        </div>
                    </div>
                    <div>
                        <h4>Reviews</h4>
                        <h5><span className="rating"><AiTwotoneStar /></span> 4.9 (20 Reviews)</h5>
                    </div>
                </div>
                <div className="col-md-6 apartment">
                    <div className="form form2">
                        <h3>$34/ night</h3>
                        <h5><span className="rating"><AiTwotoneStar /></span> 4.9 (20 Reviews)</h5>
                        <br />
                        <h6>Date</h6>
                        <div className="d-flex justify-content-between">
                            <input className="form-control" type="date" name="location" />
                            <h4><AiOutlineArrowRight /></h4>
                            <input className="form-control" type="date" name="location" />
                        </div>
                        <br />
                        <label htmlFor="guests">Guests
                            <input className="form-control" type="text" name="location" readonly="true" value="3 guests" />
                        </label>
                        <br/>
                        <br/>
                        <div className="d-flex justify-content-between">
                            <h6>$34 X 4 nights</h6>
                            <h6>$136</h6>                            
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <h6>Cleaning fee</h6>
                            <h6>$10</h6>                            
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <h6>Service fee</h6>
                            <h6>$21</h6>                            
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <h6>Total</h6>
                            <h6>$167</h6>                            
                        </div>
                        <button className="btn btn-success form-control"> <a style={{textDecoration: 'none', color: '#fff'}} href="/review">Reserve</a> </button>
                        <br/>
                        <h6 className="text-center">You wont'be charged yet</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartDetails;