import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import serviceImg from "../../images/services.jpg";
import { getCategories } from "../../store/actions/actions";
import { Link } from "react-router-dom"
import "./Category.css"

function CategoryService() {
    const { categories } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories("services"));
    },[])

    return (
        <div>
            <div className="CatServ-Cont-Img">
                <img className="CatServ-Img-Header" src={serviceImg} />
                <h2 className="CatServ-Titulo">Servicios</h2>
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

export default CategoryService;