import {CONTACTS } from "../types/contacts";

export const update_list_contact = (name,number) => ({
   type: CONTACTS,
   payload: {
      name,
      number,
    },
 });

