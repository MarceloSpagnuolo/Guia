import React, { useEffect } from "react";
import phoneImg from "../../images/911.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from "../../store/actions/actions";
import Phones from "./Phones";
import { Link } from "react-router-dom";
import "./Category.css";

function CategoryPhone() {
    const { categories } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories("phones"));
    },[])

    return (
        <div className="CatPhone-Container">
            <div className="CatPhone-Contenedor-Img">
                <img className="CatPhone-Img-Cabecera" src={phoneImg} />
                <h2 className="CatPhone-Titulo">Teléfonos Útiles</h2>
            </div>
            <div className="CatPhone-Botones">
                {categories && categories.length > 0 &&
                    categories.map((elem) => {
                        return (
                            <Link to={`/phones/${elem.id}`}>
                                <button key={elem.id}>{elem.name}</button>
                            </Link>
                        )
                    })
                }
                <br />
            </div>
        </div>
    )

};

export default CategoryPhone;