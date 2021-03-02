import axios from "axios";
import { GET_CATEGORIES, ERROR_MESSAGE, GET_CATEGORY, GET_PHONES } from "../constansts/constansts";


const host = window.location.host;
const url = "http://" + host.split(":")[0] +  ":3001"

//Action para traer todas las categorias de una base
export const getCategories = (base) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/categories/base/${base}`);
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data,
        });
    } catch(e) {
        dispatch({
            type: ERROR_MESSAGE,
            message: `No se pudo encontrar las categorias de ${base}`
        })
    }
}

//Action que trae una categoria por Id
export const getCategory = (categoryId) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/categories/${categoryId}`);
        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        });
    } catch(e) {
        dispatch({
            type: ERROR_MESSAGE,
            message: `No se pudo encontrar la categoria nro ${categoryId}`
        })
    }
}

//Action que trae todos los telefonos de una categoria
export const getPhones = (categoryId) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/phones/${categoryId}`);
        dispatch({
            type: GET_PHONES,
            payload: res.data,
        });
    } catch(e) {
        dispatch({
            type: ERROR_MESSAGE,
            message: `No se pudieron encontrar teléfonos con la categoría nro. ${categoryId}`
        })
    }
}