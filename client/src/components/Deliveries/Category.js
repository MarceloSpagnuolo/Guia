import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deliveryImg from "../../images/delivery.jpg";
import telefono from "../../images/telefono.gif";
import { getCategories } from "../../store/actions/actions";
import { Link } from "react-router-dom";
import "./Category.css";

function CategoryDelivery() {
    const { categories } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories("deliveries"));
    },[])

    return (
        <div>
            <div className="CatDel-Cont-Img">
                <img className="CatDel-Img-Cabecera" src={deliveryImg} />
                <h2 className="CatDel-Titulo">Deliverys</h2>
            </div>
            <div className="CatPhone-Botones">
                {categories && categories.length > 0 ?
                    categories.map((elem) => {
                        return (
                            <Link to={`/phones/${elem.id}`}>
                                <button key={elem.id}>{elem.name}</button>
                            </Link>
                        )
                    })
                : 
                <div>
                    <img src={telefono} />
                </div>}
                <br />
            </div>
        </div>
    )

};

export default CategoryDelivery;