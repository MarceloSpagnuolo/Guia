import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getPhones } from "../../store/actions/actions";
import phoneImg from "../../images/911.jpg";
import "./Phones.css";

function Phones(props) {
    const { categoryId } = props.match.params;
    const { category, phones } = useSelector(state => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory(categoryId));
        dispatch(getPhones(categoryId))
    },[])

    return (
        <div className="Phone-Container">
            <div className="Phone-Cont-Img">
                <img className="Phone-Img-Cabecera" src={phoneImg} />
                <h2 className="Phone-Titulo">{category.name}</h2>
            </div>
            <div className="Phone-Cont-Table">
                <table className="Phone-Table">
                    <tbody>
                        {phones && phones.length > 0 && 
                            phones.map((elem) => {
                                return (
                                    <tr key={elem.id}>
                                        <td className="Phone-Td-Name">
                                            {elem.name}
                                        </td>
                                        <td className="Phone-Td">
                                            <a href={`tel:3427-${elem.phone}`}>{elem.phone}</a>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                <br />
            </div>
        </div>
    )
};

export default Phones;