import {getTableRows} from "./storage";

export function getAllContacts() {
    return getTableRows("contacts");
}
