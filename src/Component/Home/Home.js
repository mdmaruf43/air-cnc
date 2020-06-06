import React, { useState } from 'react';
import './Home.scss';
import { FaSearchLocation } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import image1 from '../../Images/20170708_img_0797_hursty.jpg';
import image2 from '../../Images/cbeebies-land-hotel-musicalmeadow.jpg';
import image3 from '../../Images/hotel_night.jpg';
import image4 from '../../Images/hotel-michael-pool.jpg';
import imageHome1 from '../../Images/photo-1520250497591-112f2f40a3f4.jpg';
import imageHome2 from '../../Images/seo_hotels.jpg';
import imageHome3 from '../../Images/the-atlantic-apartments-1br-classical-kitchen-solis.jpg';
import Card from '../Card/Card';

const Home = () => {
    const [experiences, setExperiences] = useState([
        { id: "1", title: "Discover the city's party scene", address: "NIGHTLIFE-NEW YORK", rent: 35, rating: 64, Image: image1 },
        { id: "2", title: "Tour with and Enthusiantic Local!", address: "ENTERTAINMENT-VANCOUVER", rent: 3, rating: 1, Image: image2 },
        { id: "3", title: "Must Have L.A. Pictures!", address: "PHOTO CLASS-LOS ANGELES", rent: 39, rating: 179, Image: image3 },
        { id: "4", title: "Retro Photoshoot in NYC", address: "PHOTOGRAPHY-NEW YORK", rent: 49, rating: 72, Image: image4 },
    ])
    const [homes, setHomes] = useState([
        { id: "1", title: "Unique Cob Cottage", address: "NIGHTLIFE-NEW YORK", rent: 128, rating: 284, Image: imageHome1 },
        { id: "2", title: "The Joshua Tree House", address: "NIGHTLIFE-NEW YORK", rent: 250, rating: 269, Image: imageHome2 },
        { id: "3", title: "A Pirate's Life For me-Houseboat!", address: "PHOTO CLASS-LOS ANGELES", rent: 209, rating: 140, Image: imageHome3 },
    ])

    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-4">
                    <h3>Where do you want to go?</h3>                    
                    <div className="form">
                        <label htmlFor="location">Location
                            <input className="form-control" type="text" name="location" placeholder="Add city, Landmark, or address" />
                        </label>
                    </div>
                    <div className="date d-flex justify-content-between">
                        <label htmlFor="date">Arrival
                            <input className="form-control" type="date" name="location" />
                        </label>
                        <label htmlFor="date">Departure
                            <input className="form-control" type="date" name="location" />
                        </label>
                    </div>
                    <div className="form">
                        <label htmlFor="guests">Guests
                            <input className="form-control" type="text" name="location" placeholder="Guests Here" readonly="true" />
                        </label>
                    </div>
                    <div className="form">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 >ADULTS</h4>
                            </div>
                            <div className="d-flex align-items-center counter">
                                <button><AiOutlineMinus /></button><input className="form-control field" type="text" /><button><AiOutlinePlus /></button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="smallStyle">
                                <h4>CHILD</h4>
                                <small>Age 2 - 12</small>
                            </div>
                            <div className="d-flex align-items-center counter">
                                <button><AiOutlineMinus /></button><input className="form-control field" type="text" /><button><AiOutlinePlus /></button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="smallStyle">
                                <h4 >BABIES</h4>
                                <small>Younger than 2</small>
                            </div>
                            <div className="d-flex align-items-center counter">
                                <button><AiOutlineMinus /></button><input className="form-control field" type="text" /><button><AiOutlinePlus /></button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end" >
                            <button className="btn btn-outline-success" >APPLY</button>
                        </div>
                    </div>
                    <div className="form">
                        <a href="/maps">
                        <button className="btn btn-success form-control">  <FaSearchLocation /> Search </button></a>
                    </div>
                </div>
                {
                    experiences.map(info => <Card key={info.id} entertainment={info}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;