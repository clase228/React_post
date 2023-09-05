import {UPDATE_TOKEN, } from "../types/auth";

export const update_token = (idInstance,apiTokenInstance) => ({
   type: UPDATE_TOKEN,
   payload: {
      idInstance,
      apiTokenInstance,
    },
 });

