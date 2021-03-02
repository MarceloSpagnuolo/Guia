import { GET_CATEGORIES, ERROR_MESSAGE, GET_CATEGORY, GET_PHONES } from "../constansts/constansts";

const inicialState = {
  categories: [],
  category: {},
  phones: [],
  services: [],
  deliveries: []
};

function ReducerPhones(state = inicialState, action) {
  switch (action.type) {

    case GET_CATEGORIES: 
      return {
        ...state,
        categories: action.payload,
      };

    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }

      case GET_PHONES:
        return {
          ...state,
          phones: action.payload,
        }

    case ERROR_MESSAGE:
      alert(action.message);
      return state;

    default:
      return state;
      
  }
}

export default ReducerPhones;
