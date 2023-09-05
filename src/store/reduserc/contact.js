import { CONTACTS  } from "../actions/types/contacts";


const initialState = {
  name: [],
  number: [],
};


export default function contactReducer(state = initialState, action) {
  switch (action.type) {

    case CONTACTS: {
      const { name, number } = action.payload;

      return {
         ...state,
         name:name,
         number:number
      };

    }
    default:
      return state;
  }
}
