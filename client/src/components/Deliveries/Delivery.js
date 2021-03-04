import React from "react";
import "./Delivery.css";
import cabecera from "../../images/lamartina.jpg"
import menu from "../../documents/prueba1.pdf"

const data = {
    name: "Pizzeria La Martina",
    phones: ["481-3344","155-45854"],
    whatsapp: ["155-58976"],
    horario: "Lunes a Viernes: 10 a 23 hs\nSabados y Domingo: 18 a 24 hs",
    menu: menu,
    coverImage: cabecera,
    obs: "Acá la idea es que vaya un texto de detalle sobre el delivery, puede ser promociones, ofertas, ofrecimiento de productos, etc. y sigo agragando para que el cuadro de dialogo se haga mas grande para ver si la pagina tiene scroll automatico o tengo que agregarlo por codigo"
}

function Delivery() {

    return (
        <div className="Deli-Contenedor">
            <div>
                <img className="Deli-Img-Cabecera" src={data.coverImage} />
            </div>
            <div className="Deli-Cont-Titulo">
                <h2>{data.name}</h2>
            </div>
            <div className="Deli-Cont-Tel">
                <div className="Deli-Tel">
                    Teléfonos
                    {data.phones.map((elem) => {
                        return (
                            <a href={`tel:3472-${elem}`}>{elem}</a>
                        )
                    })}
                </div>
                <div className="Deli-Tel">
                    Whatsapp
                    {data.whatsapp.map((elem) => {
                        return (
                            <a href={`https://api.whatsapp.com/send?phone=+54-3472${elem.substr(2)}`}>{elem}</a>
                        )
                    })}
                </div>
            </div>
            <div className="Deli-Tit-Horario">
                Horario
                <div className="Deli-Horario">
                    {data.horario}
                </div>
            </div>
            <div className="Deli-Tit-Horario">
                Detalle
                <div className="Deli-Horario">
                    {data.obs}
                </div>
            </div>
            <div className="Deli-Cont-Menu">
                <a href={data.menu}>Ver Menu</a>
            </div>
            <br />
        </div>
    )

};

export default Delivery;