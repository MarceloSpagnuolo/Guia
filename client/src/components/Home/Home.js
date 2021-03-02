import React from "react";
import phoneImg from "../../images/911.jpg";
import deliveryImg from "../../images/delivery.jpg";
import serviceImg from "../../images/services.jpg";
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className="Home-Container">
            <div className="Home-Container-Phone">
                <Link to="category_phones">
                    <img className="Home-Img-Phone" src={phoneImg} />
                </Link>
                <p>Teléfonos Útiles</p>
            </div>
            <div className="Home-Container-Dos">
                <div className="Home-Container-Phone">
                    <Link to="category_deliveries">
                        <img className="Home-Img-Delivery" src={deliveryImg} />
                    </Link>
                    <p>Deliverys</p>
                </div>
                    <div className="Home-Container-Phone">
                        <Link to="category_services">
                            <img className="Home-Img-Service" src={serviceImg} />
                        </Link>
                        <p>Servicios</p>
                    </div>
            </div>
        </div>
    )
};

export default Home;