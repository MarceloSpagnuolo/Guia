import React from "react";
import leonesImg from "../../images/arcoleones.jpg";
import "./info.css";

function info() {

    return (
        <div>
            <div className="Info-Cont-Img">
                <img className="Info-Img" src={leonesImg} />
                <h2 className="Info-Titulo">Leones en tu Móvil</h2>
            </div>
        </div>
    )

};

export default info;