"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const router = express_1.Router();
router.route('/')
    .get(contact_controller_1.getContacts)
    .post(contact_controller_1.createContact);
exports.default = router;
