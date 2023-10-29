import express from "express";
const router = express.Router();

import {addContact, getAllcontact, deletecontact, updatecontact, get_single_data} from "../Controller/contact.js";

router.post("/contact",addContact);
router.get("/allcontact",getAllcontact);
router.delete("/dltcontact/:id",deletecontact);
router.put("/updtcontact/:id",updatecontact);
router.get("/singledata/:id",get_single_data);

export default router;