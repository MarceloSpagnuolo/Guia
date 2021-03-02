import React from "react";
import phoneImg from "../../images/phone.png";
import deliveryImg from "../../images/delivery.png";
import homeImg from "../../images/home.png";
import serviceImg from "../../images/tools.png";
import infoImg from "../../images/info.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <>
            <div className="Barra-Container">
                <div className="Barra-Lateral">
                    <Link to="/category_phones">
                        <img className="Barra-Icono-Ch" src={phoneImg} />
                    </Link>
                    <Link to="/category_deliveries">
                        <img className="Barra-Icono-Ch" src={deliveryImg}  />
                    </Link>
                </div>
                <div className="Barra-Central">
                    <Link to="/">
                        <img className="Barra-Icono-Ch" src={homeImg} />
                    </Link>
                </div>
                <div className="Barra-Lateral">
                    <Link to="/category_services">
                        <img className="Barra-Icono-Ch" src={serviceImg} />
                    </Link>
                    <Link to="/info">
                        <img className="Barra-Icono-Ch" src={infoImg} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;