import { UPDATE_TOKEN  } from "../actions/types/auth";


const initialState = {
  idInstance: [],
  apiTokenInstance: [],
};


export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_TOKEN: {
      const { idInstance, apiTokenInstance } = action.payload;

      return {
         ...state,
         idInstance:idInstance,
         apiTokenInstance:apiTokenInstance
      };

    }
    default:
      return state;
  }
}
